/**
 * @schema AdminStore
 * type: object
 * description: The store's details.
 * x-schemaName: AdminStore
 * required:
 *   - id
 *   - name
 *   - supported_currencies
 *   - default_sales_channel_id
 *   - default_region_id
 *   - default_location_id
 *   - metadata
 *   - created_at
 *   - updated_at
 * properties:
 *   id:
 *     type: string
 *     title: id
 *     description: The store's ID.
 *   name:
 *     type: string
 *     title: name
 *     description: The store's name.
 *   supported_currencies:
 *     type: array
 *     description: The store's supported currencies.
 *     items:
 *       $ref: "#/components/schemas/AdminStoreCurrency"
 *   default_sales_channel_id:
 *     type: string
 *     title: default_sales_channel_id
 *     description: The store's default sales channel id.
 *   default_region_id:
 *     type: string
 *     title: default_region_id
 *     description: The store's default region id.
 *   default_location_id:
 *     type: string
 *     title: default_location_id
 *     description: The store's default location id.
 *   metadata:
 *     type: object
 *     description: The store's metadata.
 *   created_at:
 *     type: string
 *     format: date-time
 *     title: created_at
 *     description: The store's created at.
 *   updated_at:
 *     type: string
 *     format: date-time
 *     title: updated_at
 *     description: The store's updated at.
 * 
*/

