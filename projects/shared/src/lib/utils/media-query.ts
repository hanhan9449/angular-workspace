import {distinctUntilChanged, from, Observable, of} from "rxjs";

export function getMediaQueryResult$(query: string): Observable<boolean> {
  return new Observable<boolean>(subscriber => {
    const mediaQueryResult = matchMedia(query)
    subscriber.next(mediaQueryResult.matches)
    mediaQueryResult.addEventListener('change', (mediaQueryList) => {
      subscriber.next(mediaQueryList.matches)
    })
  }).pipe(distinctUntilChanged())

}
