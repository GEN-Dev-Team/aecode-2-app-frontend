import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-offers',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="19"
      viewBox="0 0 20 19"
      [class]="class"
    >
      <path
        d="M15.2922 16.7128C14.9802 16.7128 14.6674 16.7218 14.3562 16.7092C14.207 16.703 14.131 16.7602 14.0612 16.8845C13.7671 17.4092 13.4641 17.9286 13.1619 18.448C12.8347 19.0103 12.3072 19.1516 11.7413 18.828C11.213 18.5258 10.6847 18.2227 10.1617 17.9116C10.0437 17.841 9.95786 17.8446 9.83985 17.9143C9.32313 18.2219 8.80104 18.5195 8.27896 18.819C7.68804 19.1579 7.17131 19.0175 6.82803 18.4266C6.52944 17.9134 6.22995 17.4003 5.93941 16.8827C5.86878 16.7575 5.79101 16.7074 5.6435 16.7092C5.049 16.7182 4.4545 16.7146 3.86001 16.7128C3.16896 16.711 2.78812 16.3266 2.78633 15.632C2.78544 15.0375 2.78186 14.443 2.78902 13.8485C2.7908 13.7117 2.747 13.6348 2.6281 13.5678C2.09171 13.2656 1.558 12.9572 1.02698 12.6452C0.490589 12.3296 0.352022 11.7995 0.663127 11.2542C0.964399 10.7258 1.26746 10.1975 1.57946 9.6745C1.65277 9.55113 1.66081 9.46173 1.58393 9.33389C1.27014 8.8118 0.969763 8.28257 0.667597 7.75422C0.348446 7.19727 0.486119 6.6725 1.0386 6.34888C1.56426 6.04135 2.09082 5.73561 2.62184 5.43881C2.74968 5.36729 2.79259 5.28505 2.7908 5.14022C2.78276 4.53857 2.78544 3.93603 2.78812 3.33438C2.7908 2.68356 3.18058 2.29199 3.82872 2.28842C4.43037 2.28484 5.03291 2.28216 5.63456 2.29199C5.79101 2.29468 5.87236 2.23925 5.94567 2.10694C6.23889 1.58217 6.54195 1.06277 6.84501 0.543366C7.16774 -0.00911433 7.69429 -0.150363 8.24946 0.166106C8.77869 0.467378 9.30704 0.769544 9.83002 1.08065C9.95428 1.15485 10.0437 1.16111 10.1715 1.08423C10.6936 0.771332 11.2228 0.47006 11.7512 0.167894C12.3081 -0.150363 12.8329 -0.0109023 13.1565 0.541578C13.4569 1.05383 13.7591 1.56519 14.0434 2.08638C14.1319 2.24998 14.2365 2.29378 14.4108 2.2911C14.9901 2.28127 15.5703 2.28574 16.1496 2.28752C16.8281 2.29021 17.2116 2.67462 17.2143 3.35494C17.2161 3.94944 17.2197 4.54393 17.2116 5.13843C17.2098 5.28236 17.251 5.3655 17.3797 5.43702C17.8982 5.72667 18.4096 6.02794 18.9236 6.32564C19.5235 6.6725 19.6611 7.18833 19.3134 7.79356C19.021 8.30223 18.7314 8.8118 18.4283 9.31422C18.3425 9.45547 18.3506 9.55828 18.4328 9.69506C18.7385 10.2046 19.0327 10.7205 19.3277 11.2354C19.6576 11.812 19.5127 12.3368 18.9361 12.6702C18.4158 12.9706 17.8964 13.2755 17.3725 13.5696C17.2536 13.6366 17.2089 13.7126 17.2107 13.8494C17.2179 14.4439 17.2152 15.0384 17.2134 15.6329C17.2116 16.3293 16.8317 16.711 16.1397 16.7137C15.8572 16.7146 15.5747 16.7128 15.2922 16.7128ZM12.0945 5.11429C10.1831 7.66304 8.287 10.1912 6.3864 12.7257C6.90401 13.1127 7.40107 13.4846 7.90885 13.8655C9.8175 11.3203 11.711 8.79571 13.616 6.2568C13.1127 5.87865 12.6148 5.50496 12.0945 5.11429ZM6.19956 6.16115C6.19956 6.9559 6.83339 7.58615 7.62814 7.58437C8.41574 7.58258 9.0603 6.93087 9.05046 6.14774C9.04063 5.36908 8.40143 4.73346 7.62546 4.73167C6.83607 4.72988 6.19866 5.36908 6.19956 6.16115ZM13.802 12.8106C13.7984 12.0275 13.1708 11.3981 12.3877 11.3927C11.6019 11.3874 10.9538 12.0292 10.9502 12.8159C10.9475 13.6009 11.5921 14.2427 12.3823 14.2427C13.1753 14.2427 13.8056 13.6062 13.802 12.8106Z"
      />
    </svg>
  `,
  styles: ``,
})
export class SvgOffersComponent {
  @Input() class = '';
}
