define("LkmnTestApplication_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SectionContentWrapper",
				"values": {
					"direction": "row",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_LkmnName",
							"caption": "#ResourceString(PDS_LkmnName)#",
							"dataValueType": 1,
							"width": 156
						},
						{
							"id": "1dc59b3f-8010-c787-c57f-b128e39ee3e5",
							"code": "PDS_LkmnStatus",
							"path": "LkmnStatus",
							"caption": "#ResourceString(PDS_LkmnStatus)#",
							"dataValueType": 10,
							"referenceSchemaName": "LkmnTestStatus",
							"width": 193
						},
						{
							"id": "670d8d37-4e81-8bde-fa67-50f7a6f1413f",
							"code": "PDS_LkmnCategory",
							"path": "LkmnCategory",
							"caption": "#ResourceString(PDS_LkmnCategory)#",
							"dataValueType": 10,
							"referenceSchemaName": "LkmnTestCategory",
							"width": 130
						},
						{
							"id": "97f38aa0-54f7-21b7-ac01-aeb6772ebdb3",
							"code": "PDS_LkmnSubcategory",
							"path": "LkmnSubcategory",
							"caption": "#ResourceString(PDS_LkmnSubcategory)#",
							"dataValueType": 10,
							"referenceSchemaName": "LkmnTestSubcategory",
							"width": 137
						},
						{
							"id": "4eacaedf-1ff0-f726-c7e4-7a0c94cea877",
							"code": "PDS_LkmnOwner",
							"path": "LkmnOwner",
							"caption": "#ResourceString(PDS_LkmnOwner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "447dd599-aa75-56a5-9ca1-d0ddfaf78002",
							"code": "PDS_LkmnApplicant",
							"path": "LkmnApplicant",
							"caption": "#ResourceString(PDS_LkmnApplicant)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "07350f1b-54fd-bf61-b649-381e97cc88a8",
							"code": "PDS_LkmnTestExpensesLkmnTestIdCount0282c556",
							"path": "[LkmnTestExpenses:LkmnTest].Id",
							"caption": "#ResourceString(PDS_LkmnTestExpensesLkmnTestIdCount0282c556)#",
							"dataValueType": 4,
							"referenceSchemaName": "LkmnTestExpenses"
						},
						{
							"id": "77d2df18-3133-26e2-293a-e4279259ebe8",
							"code": "PDS_LkmnTestExpensesLkmnTestLkmnAmountSum4d8812ee",
							"path": "[LkmnTestExpenses:LkmnTest].LkmnAmount",
							"caption": "#ResourceString(PDS_LkmnTestExpensesLkmnTestLkmnAmountSum4d8812ee)#",
							"dataValueType": 6,
							"referenceSchemaName": "LkmnTestExpenses"
						}
					],
					"layoutConfig": {
						"basis": "100%",
						"width": 300
					},
					"primaryColumnName": "PDS_Id",
					"sorting": "$ItemsSorting | crt.ToDataTableSortingConfig: 'Items'"
				}
			},
			{
				"operation": "remove",
				"name": "DataTable",
				"properties": [
					"selectionState",
					"_selectionOptions"
				]
			},
			{
				"operation": "insert",
				"name": "MainFilterContainer",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "medium",
						"rowGap": "none"
					},
					"items": [],
					"color": "primary",
					"borderRadius": "none",
					"padding": {
						"top": "small",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"fitContent": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeftFilterContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"wrap": "nowrap",
					"items": [],
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "large"
					},
					"justifyContent": "start",
					"gap": "medium",
					"alignItems": "center"
				},
				"parentName": "MainFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FolderTreeActions",
				"values": {
					"type": "crt.FolderTreeActions",
					"caption": "#ResourceString(FolderTreeActions_caption)#",
					"folderTree": "FolderTree"
				},
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LookupQuickFilterByTag",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(LookupQuickFilterByTag_config_caption)#",
						"hint": "#ResourceString(LookupQuickFilterByTag_config_hint)#",
						"icon": "tag-icon",
						"iconPosition": "left-icon",
						"entitySchemaName": "Tag_Virtual_Schema"
					},
					"filterType": "lookup",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "LookupQuickFilterByTag_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "Tag_Virtual_Column"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "LookupQuickFilterByTag_Value"
					}
				},
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "RightFilterContainer",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "medium",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "end",
					"gap": "medium",
					"alignItems": "center"
				},
				"parentName": "MainFilterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(SearchFilter_placeholder)#",
					"targetAttributes": [
						"Items"
					]
				},
				"parentName": "RightFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(RefreshButtonCaption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "PDS"
						}
					},
					"iconPosition": "only-icon",
					"icon": "reload-button-icon",
					"clickMode": "default"
				},
				"parentName": "RightFilterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FolderTree",
				"values": {
					"type": "crt.FolderTree",
					"caption": "#ResourceString(FolderTree_caption)#",
					"sourceSchemaName": "FolderTree",
					"rootSchemaName": "LkmnTestApplication",
					"layoutConfig": {
						"width": 328.125
					},
					"classes": [
						"section-folder-tree"
					],
					"_filterOptions": {
						"expose": [
							{
								"attribute": "FolderTree_active_folder_filter",
								"converters": [
									{
										"converter": "crt.FolderTreeActiveFilterAttributeConverter",
										"args": []
									}
								]
							}
						],
						"from": [
							"FolderTree_items",
							"FolderTree_favoriteItems",
							"FolderTree_active_folder_id"
						]
					}
				},
				"parentName": "SectionContentWrapper",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"ItemsSorting": {},
					"FolderTree_visible": {
						"value": false
					},
					"FolderTree_items": {
						"isCollection": true,
						"viewModelConfig": {
							"attributes": {
								"Id": {
									"modelConfig": {
										"path": "FolderTree_items_DS.Id"
									}
								},
								"Name": {
									"modelConfig": {
										"path": "FolderTree_items_DS.Name"
									}
								},
								"ParentId": {
									"modelConfig": {
										"path": "FolderTree_items_DS.Parent.Id"
									}
								},
								"FilterData": {
									"modelConfig": {
										"path": "FolderTree_items_DS.FilterData"
									}
								}
							}
						},
						"modelConfig": {
							"path": "FolderTree_items_DS",
							"filterAttributes": [
								{
									"name": "FolderTree_items_DS_filter",
									"loadOnChange": true
								}
							]
						},
						"embeddedModel": {
							"config": {
								"type": "crt.EntityDataSource",
								"config": {
									"entitySchemaName": "FolderTree"
								}
							},
							"name": "FolderTree_items_DS"
						}
					},
					"FolderTree_active_folder_id": {},
					"FolderTree_active_folder_name": {},
					"FolderTree_active_folder_filter": {
						"value": {}
					},
					"FolderTree_items_DS_filter": {
						"value": {
							"isEnabled": true,
							"trimDateTimeParameterToDate": false,
							"filterType": 6,
							"logicalOperation": 0,
							"items": {
								"3714ebf4-41a3-9a82-8e8b-039d9ac03ce1": {
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"filterType": 1,
									"comparisonType": 3,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "EntitySchemaName"
									},
									"rightExpression": {
										"expressionType": 2,
										"parameter": {
											"dataValueType": 1,
											"value": "LkmnTestApplication"
										}
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items"
				],
				"values": {
					"modelConfig": {
						"path": "PDS",
						"pagingConfig": {
							"rowCount": 30
						},
						"sortingConfig": {
							"attributeName": "ItemsSorting",
							"default": [
								{
									"direction": "asc",
									"columnName": "LkmnTestExpensesLkmnTestLkmnAmountSum4d8812ee"
								}
							]
						},
						"filterAttributes": [
							{
								"loadOnChange": true,
								"name": "FolderTree_active_folder_filter"
							},
							{
								"name": "Items_PredefinedFilter",
								"loadOnChange": true
							},
							{
								"name": "LookupQuickFilterByTag_Items",
								"loadOnChange": true
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_LkmnName": {
						"modelConfig": {
							"path": "PDS.LkmnName"
						}
					},
					"PDS_LkmnStatus": {
						"modelConfig": {
							"path": "PDS.LkmnStatus"
						}
					},
					"PDS_LkmnCategory": {
						"modelConfig": {
							"path": "PDS.LkmnCategory"
						}
					},
					"PDS_LkmnSubcategory": {
						"modelConfig": {
							"path": "PDS.LkmnSubcategory"
						}
					},
					"PDS_LkmnOwner": {
						"modelConfig": {
							"path": "PDS.LkmnOwner"
						}
					},
					"PDS_LkmnApplicant": {
						"modelConfig": {
							"path": "PDS.LkmnApplicant"
						}
					},
					"PDS_LkmnTestExpensesLkmnTestIdCount0282c556": {
						"modelConfig": {
							"path": "PDS.LkmnTestExpensesLkmnTestIdCount0282c556"
						}
					},
					"PDS_LkmnTestExpensesLkmnTestLkmnAmountSum4d8812ee": {
						"modelConfig": {
							"path": "PDS.LkmnTestExpensesLkmnTestLkmnAmountSum4d8812ee"
						}
					},
					"PDS_Id": {
						"modelConfig": {
							"path": "PDS.Id"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"PDS": {
							"type": "crt.EntityDataSource",
							"hiddenInPageDesigner": true,
							"config": {
								"entitySchemaName": "LkmnTestApplication",
								"attributes": {
									"LkmnName": {
										"path": "LkmnName"
									},
									"LkmnStatus": {
										"path": "LkmnStatus"
									},
									"LkmnCategory": {
										"path": "LkmnCategory"
									},
									"LkmnSubcategory": {
										"path": "LkmnSubcategory"
									},
									"LkmnOwner": {
										"path": "LkmnOwner"
									},
									"LkmnApplicant": {
										"path": "LkmnApplicant"
									},
									"LkmnTestExpensesLkmnTestIdCount0282c556": {
										"type": "Aggregation",
										"path": "[LkmnTestExpenses:LkmnTest].Id",
										"aggregationConfig": {
											"aggregationFunction": "Count",
											"filter": null
										}
									},
									"LkmnTestExpensesLkmnTestLkmnAmountSum4d8812ee": {
										"type": "Aggregation",
										"path": "[LkmnTestExpenses:LkmnTest].LkmnAmount",
										"aggregationConfig": {
											"aggregationFunction": "Sum",
											"filter": null
										}
									}
								}
							},
							"scope": "viewElement"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});