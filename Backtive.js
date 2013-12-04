var Backtive = Backbone.View.extend({
    constructor: function() {
        Backbone.View.apply(this, arguments);
        this.active = false;
        var activate = this.activate,
            deactivate = this.deactivate;
        this.activate = function(options) {
            options || (options={});
            _.defaults(options, {empty : true});
            if (this.active) {
                if (!options.force) {
                    return this;
                }
                this.deactivate();
            }
            this.active = true;
            if (options.render) {
                this.render({empty: options.empty});
            }
            if (options.show) {
                this.$el.show();
            }
            activate.apply(this, arguments);
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
            deactivate.apply(this, arguments);
        };
    },
    activate: function() {
        var events,
            others = ['model', 'collection'];
        for (var other in others) {
            if (!this[other]) {
                continue;
            }
            events = this[other + 'Events'];
            if (events) {
                for (var event in events) {
                    var method = events[event];
                    if (!_.isFunction(method)) {
                        method = this[method];
                    }
                    if (!method) {
                        continue;
                    }
                    this.listenTo(this[other], event, method);
                }
            }
        }
    },
    deactivate: function() {
        var events,
            others = ['model', 'collection'];
        for (var other in others) {
            if (!this[other]) {
                continue;
            }
            this.stopListening(this[other]);
        }
    },
    empty: function() {
        this.$el.empty();
    },
    render: function(options) {
        options || (options={});
        if (options.empty) {
            this.empty();
        }
        return this;
    }
});
