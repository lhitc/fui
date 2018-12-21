/*

Copyright 2018 Lang Health IT Consulting

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/


// config
var questionnaireUrl = "./Questionnaire-example.json";


// init
var fui = new Fui({
    el: "#fui"
});

// Questionnaire einlesen
var xhr = new XMLHttpRequest();
xhr.open("GET", questionnaireUrl);
xhr.onload = function(e) {
    fui.questionnaire = JSON.parse(xhr.response);
};
xhr.onerror = function(e) {
    alert("Error while reading the Questionnaire: " + xhr.response);
};
xhr.send(null);

// Vue components
Fui.component('label-value-identifier', {
	props: ['label', 'value'],
	template: '<div class="row" v-if="value"><div class="col-4">{{ label }}:</div><div class="col-8">{{ value.system + \' | \' + value.value }}</div></div>'
})
Fui.component('label-value-period', {
	props: ['label', 'value'],
	template: '<div class="row" v-if="value"><div class="col-4">{{ label }}:</div><div class="col-8">{{ value.start + \' ... \' + value.end }}</div></div>'
})
Fui.component('label-value-scalar', {
	props: ['label', 'value'],
	template: '<div class="row" v-if="value"><div class="col-4">{{ label }}:</div><div class="col-8">{{ value }}</div></div>'
})
