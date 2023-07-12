import { blockTypes } from "./blocks";
import { documentTypes } from "./documents";
import { objectTypes } from "./objects";
import { singletonsType } from "./singletons";
import { taxonomyTypes } from "./taxonomy";


export const schemaTypes = [
    ...blockTypes,
    ...documentTypes,
    ...objectTypes,
    ...singletonsType,
    ...taxonomyTypes,
]