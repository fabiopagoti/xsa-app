/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"natura/cadastro-clientes-ui/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});