var Backtive = Backbone.View.extend({
    constructor: function() {
        Backbone.View.apply(this, arguments);
        this.active = false;
        var activate = this.activate,
            deactivate = this.deactivate;
        this.activate = function(options) {
            options || (options={});
            if (this.active && !options.force) {
                return this;
            }
            this.active = true;
            if (options.show) {
                this.$el.show();
            }
            return active.apply(this, arguments);
        };
        this.deactivate = function(options) {
            options || (options={});
            if (!this.active && !options.force) {
                return this;
            }
            this.active = false;
            if (options.hide) {
                this.$el.hide();
            }
            return deactivate.apply(this, arguments);
        };
    },
    activate: function(options) {
        return this;
    },
    deactivate: function(options) {
        return this;
    }
});
