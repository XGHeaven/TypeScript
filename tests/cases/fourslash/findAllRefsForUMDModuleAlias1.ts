﻿/// <reference path='fourslash.ts' />

// @Filename: 0.d.ts
//// export function doThing(): string;
//// export function doTheOtherThing(): void;

//// export as namespace [|myLib|];

// @Filename: 1.ts
//// /// <reference path="0.d.ts" />
//// [|myLib|].doThing();

verify.rangesReferenceEachOther();
