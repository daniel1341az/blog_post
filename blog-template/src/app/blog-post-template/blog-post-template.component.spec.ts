import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostTemplateComponent } from './blog-post-template.component';

describe('BlogPostTemplateComponent', () => {
  let component: BlogPostTemplateComponent;
  let fixture: ComponentFixture<BlogPostTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogPostTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
