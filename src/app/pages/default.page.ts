export class DefaultPage {
    isScrolledToTop = true;
    onScroll(e) {
        this.isScrolledToTop = e.detail.scrollTop <= 0;
    }
}
