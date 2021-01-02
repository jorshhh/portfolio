import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    font: {
        family: 'Libre Baskerville'
    },
    options: {
        customProperties: true
    },
    theme: {
        themes: {
            light: {
                primary: '#010c1e',
                secondary: '#d5d9e0',
                accent: '#4a6d88',
            },
        },
    },
});
