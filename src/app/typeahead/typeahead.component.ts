import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, Subject, Subscription } from 'rxjs';
import { switchMap, debounce, debounceTime, distinctUntilChanged, concatMap, exhaustMap, take } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss']
})
export class TypeaheadComponent implements OnInit, OnDestroy {
  public states;
  public search$ = new Subject();
  public searchForm = this.fb.group({
    search: [''],
  });

  constructor(private fb: FormBuilder, private _http: HttpClient) { }

  ngOnInit(): void {
    this._http.get(`api/search`).pipe(take(1)).subscribe((res: any) => {
      this.states = res.data;
    });

    this.searchForm.valueChanges.subscribe((val) => {
      this.search$.next(val.search);
    })

    this.search$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((val) => {
        return this._http.get(`api/search/${val}`);
      })
    ).subscribe((res: any) => {
      this.states = res.data;
    })

  }



  ngOnDestroy() {

  }
}
