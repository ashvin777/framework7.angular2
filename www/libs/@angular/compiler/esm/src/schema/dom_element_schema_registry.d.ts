/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { SchemaMetadata, SecurityContext } from '@angular/core';
import { ElementSchemaRegistry } from './element_schema_registry';
export declare class DomElementSchemaRegistry extends ElementSchemaRegistry {
    schema: {
        [element: string]: {
            [property: string]: string;
        };
    };
    constructor();
    hasProperty(tagName: string, propName: string, schemaMetas: SchemaMetadata[]): boolean;
    /**
     * securityContext returns the security context for the given property on the given DOM tag.
     *
     * Tag and property name are statically known and cannot change at runtime, i.e. it is not
     * possible to bind a value into a changing attribute or tag name.
     *
     * The filtering is white list based. All attributes in the schema above are assumed to have the
     * 'NONE' security context, i.e. that they are safe inert string values. Only specific well known
     * attack vectors are assigned their appropriate context.
     */
    securityContext(tagName: string, propName: string): SecurityContext;
    getMappedPropName(propName: string): string;
    getDefaultComponentElementName(): string;
}
