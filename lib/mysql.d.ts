export function initialize(dataSource: DataSource, callback?: Function): void;
export type DataSource = object;
/**
 * @constructor
 * Constructor for MySQL connector
 * @param {Object} client The node-mysql client object
 */
export function MySQL(settings: any): void;
export class MySQL {
    /**
     * @constructor
     * Constructor for MySQL connector
     * @param {Object} client The node-mysql client object
     */
    constructor(settings: any);
    connect(callback: any): void;
    client: any;
    /**
     * Execute the sql statement
     *
     * @param {String} sql The SQL statement
     * @param {Function} [callback] The callback after the SQL statement is executed
     */
    executeSQL(sql: string, params: any, options: any, callback?: Function): void;
    _modifyOrCreate(model: any, data: any, options: any, fields: any, cb: any): void;
    /**
     * Replace if the model instance exists with the same id or create a new instance
     *
     * @param {String} model The model name
     * @param {Object} data The model instance data
     * @param {Object} options The options
     * @param {Function} [cb] The callback function
     */
    replaceOrCreate(model: string, data: any, options: any, cb?: Function): void;
    /**
     * Update if the model instance exists with the same id or create a new instance
     *
     * @param {String} model The model name
     * @param {Object} data The model instance data
     * @param {Object} options The options
     * @param {Function} [cb] The callback function
     */
    save: (model: string, data: any, options: any, cb?: Function) => void;
    updateOrCreate(model: string, data: any, options: any, cb?: Function): void;
    getInsertedId(model: any, info: any): any;
    /*!
     * Convert property name/value to an escaped DB column value
     * @param {Object} prop Property descriptor
     * @param {*} val Property value
     * @returns {*} The escaped value of DB column
     */
    toColumnValue(prop: any, val: any): any;
    _serializeObject(obj: any): string;
    /*!
     * Convert the data from database column to model property
     * @param {object} Model property descriptor
     * @param {*) val Column value
     * @returns {*} Model property value
     */
    fromColumnValue(prop: any, val: any): any;
    /**
     * Escape an identifier such as the column name
     * @param {string} name A database identifier
     * @returns {string} The escaped database identifier
     */
    escapeName(name: string): string;
    /**
     * Build the LIMIT clause
     * @param {string} model Model name
     * @param {number} limit The limit
     * @param {number} offset The offset
     * @returns {string} The LIMIT clause
     */
    _buildLimit(model: string, limit: number, offset: number): string;
    applyPagination(model: any, stmt: any, filter: any): any;
    /**
     * Get the place holder in SQL for identifiers, such as ??
     * @param {String} key Optional key, such as 1 or id
     * @returns {String} The place holder
     */
    getPlaceholderForIdentifier(key: string): string;
    /**
     * Get the place holder in SQL for values, such as :1 or ?
     * @param {String} key Optional key, such as 1 or id
     * @returns {String} The place holder
     */
    getPlaceholderForValue(key: string): string;
    getCountForAffectedRows(model: any, info: any): any;
    /**
     * Disconnect from MySQL
     */
    disconnect(cb: any): void;
    ping(cb: any): void;
    buildExpression(columnName: any, operator: any, operatorValue: any, propertyDefinition: any): any;
    /**
     * Override buildSelect from loopback-connector
     * Build a SQL SELECT statement
     * @param {String} model Model name
     * @param {Object} filter Filter object
     * @param {Object} options Options object
     * @returns {ParameterizedSQL} Statement object {sql: ..., params: [...]}
     */
    buildSelect(model: string, filter: any, options: any): any;
}
