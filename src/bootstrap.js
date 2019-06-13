import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'reflect-metadata';
import { Component } from 'vue-property-decorator';

// do this before any VUE component is loaded, otherwise @Component() would ignore navigation guards
Component.registerHooks(['beforeRouteEnter', 'beforeRouteLeave', 'beforeRouteUpdate']);
