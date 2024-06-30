import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  inject,
  viewChild,
} from '@angular/core';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent implements OnDestroy {
  dataSrv = inject(DataService);
  project = this.dataSrv.activeProject;
  techElem = viewChild<ElementRef<HTMLElement>>('tech');

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    const windowHeight = window.innerHeight;
    const boundingRect = this.techElem()?.nativeElement.getBoundingClientRect();
    if (
      boundingRect &&
      boundingRect.top >= 0 &&
      boundingRect.top <= windowHeight
    ) {
      console.log('zzz');
      $('.bar').each(function () {
        $(this)
          .find('.progress-content')
          .animate(
            {
              width: $(this).attr('data-percentage'),
            },
            2000
          );
      });
    }
  }

  ngOnDestroy(): void {
    this.dataSrv.clearSelectedProject();
    sessionStorage.removeItem('activeProject');
  }

  keepTrack(section: string) {
    console.log('as');
    const viewHeight = window.innerHeight;
    const element = document.getElementById(section);
    if (element !== null) {
      const rect = element.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < viewHeight / 2) {
        $('.bar').each(function () {
          $(this)
            .find('.progress-content')
            .animate(
              {
                width: $(this).attr('data-percentage'),
              },
              2000
            );
        });
      }
    }
  }
}
