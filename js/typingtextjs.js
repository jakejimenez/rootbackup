(function () {
    var app;
    $(document).ready(function () {
        return app.init();
    });
    app = {
        text: 'Hello stranger! Welcome to r00t1000\'s portfolio!',
        index: 0,
        chars: 0,
        speed: 170,
        container: '.text .content',
        init: function () {
            this.chars = this.text.length;
            return this.write();
        },
        write: function () {
            $(this.container).append(this.text[this.index]);
            if (this.index < this.chars) {
                this.index++;
                return window.setTimeout(function () {
                    return app.write();
                }, this.speed);
            }
        }
    };
}.call(this));
