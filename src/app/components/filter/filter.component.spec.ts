import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { FilterComponent } from './filter.component'
import { RouterTestingModule } from '@angular/router/testing'
import { LibraryService } from 'services/library/library.service'
import { WatchlistService } from 'services/watchlist/watchlist.service'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

describe('FilterComponent', () => {
  let component: FilterComponent
  let fixture: ComponentFixture<FilterComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpModule
      ], declarations: [
         FilterComponent
       ], providers: [
        LibraryService,
        WatchlistService
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
