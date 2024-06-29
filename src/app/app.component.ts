import { NgStyle } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  signal,
} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  title = 'minfo';
  cursorStyle = signal<{ [key: string]: string }>({});
  cursorInnerStyle = signal<{ [key: string]: string }>({});

  ngAfterViewInit(): void {
    if ($('.custom_cursor').length) {
      var cursor = document.querySelector<HTMLElement>('.custom_cursor_one');
      var cursorInner =
        document.querySelector<HTMLElement>('.custom_cursor_two');
      var anchors = document.querySelectorAll<HTMLElement>('a');

      document.addEventListener('mousemove', (e) => {
        var x = e.clientX;
        var y = e.clientY;
        this.cursorStyle.set({
          transform: `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`,
        });
        this.cursorInnerStyle.set({ left: `${x}px`, top: `${y}px` });
      });
      document.addEventListener('mousedown', function () {
        if (cursor) {
          cursor.classList.add('click');
        }
        if (cursorInner) {
          cursorInner.classList.add('custom_cursor_hover');
        }
      });
      document.addEventListener('mouseup', function () {
        if (cursor) {
          cursor.classList.remove('click');
        }
        if (cursorInner) {
          cursorInner.classList.remove('custom_cursor_hover');
        }
      });
      anchors.forEach((item) => {
        item.addEventListener('mouseover', () => {
          if (cursor) {
            cursor.classList.add('custom_cursor_hover');
          }
        });
        item.addEventListener('mouseleave', () => {
          if (cursor) {
            cursor.classList.remove('custom_cursor_hover');
          }
        });
      });
    }

    if (localStorage['theme'] === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    var getUrlParameter = function getUrlParameter(sParam: string) {
      var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

      for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined
            ? true
            : decodeURIComponent(sParameterName[1]);
        }
      }
      return false;
    };
    var version = getUrlParameter('version');

    /* const themeSwitcherItems = document.querySelectorAll('.switcher-input');
    themeSwitcherItems.forEach((item) => {
      item.addEventListener('click', this.onThemeSwitcherItemClick);
    }); */

    if (localStorage['theme'] === 'dark') {
      $('#dark_theme').addClass('active');
    } else {
      $('#light_theme').addClass('active');
    }
    if (version) {
      if (version == 'dark') {
        this.setDarkTheme();
      } else if (version == 'light') {
        this.setLightTheme();
      }
    }

    this.mobile_menu(
      '.menu_toggle, .close-menu ',
      '.mobile-menu, .minfo__app, .menu-overlay'
    );
  }

  onThemeSwitcherItemClick(e: Event) {
    var theme = (e.target as HTMLElement).dataset['theme'];
    if (theme == 'dark') {
      this.setDarkTheme();
    } else {
      this.setLightTheme();
    }
  }

  setDarkTheme() {
    document.documentElement.classList.add('dark');
    localStorage['theme'] = 'dark';
    $('#light_theme').removeClass('active');
    $('#dark_theme').addClass('active');
  }
  setLightTheme() {
    document.documentElement.classList.remove('dark');
    localStorage['theme'] = 'light';
    $('#dark_theme').removeClass('active');
    $('#light_theme').addClass('active');
  }

  mobile_menu(selector: string, actionSelector: string) {
    var mobile_menu = $(selector);
    mobile_menu.on('click', function () {
      $(selector).toggleClass('is-menu-open');
    });

    var hamburgerbtn = $(selector);
    hamburgerbtn.on('click', function () {
      $(actionSelector).toggleClass('is-menu-open');
    });
    $('.mobile-menu .main-menu a, .menu-overlay').on('click', function (e) {
      $(actionSelector).removeClass('is-menu-open');
      $(selector).removeClass('is-menu-open');
    });
  }
}
