var Backtive = Backbone.View.extend({
    constructor: function() {
        Backbone.View.apply(this, arguments);
        this.active = false;
        var activate = this.activate;
        this.activate = function(options) {
            options || (options={});
            if (this.active && !options.force) {
                return this;
            }
            this.active = true;
            return active.apply(this, arguments);
        };
        this.dactivate = function(options) {
            options || (options={});
            if (!this.active && !options.force) {
                return this;
            }
            this.active = false;
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
