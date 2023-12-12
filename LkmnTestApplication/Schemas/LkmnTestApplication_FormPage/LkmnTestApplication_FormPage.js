define("LkmnTestApplication_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"padding": {
						"left": "small",
						"right": "small",
						"top": "none",
						"bottom": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "#FD8701",
					"tabTitleColor": "#757575",
					"underlineSelectedTabColor": "crt-color-orange-red",
					"headerBackgroundColor": "auto",
					"visible": true,
					"stretch": true
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "LkmnTestApplication"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "000717c1-3c7e-4438-8505-b92285531fe2",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_ob00u92",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_ob00u92_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-icon",
					"visible": true,
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"dataSourceName": "PDS"
						}
					},
					"clickMode": "default",
					"icon": "reload-button-icon"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "LkmnName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.LkmnName",
					"control": "$LkmnName",
					"labelPosition": "auto",
					"multiline": false,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_zv9z3oq",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_qbab6j2",
					"labelPosition": "auto",
					"control": "$LookupAttribute_qbab6j2",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ButtonToggleGroup_1ymivqr",
				"values": {
					"for": "TabPanel_hty9wym",
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"fitContent": true,
					"type": "crt.ButtonToggleGroup"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_1arqzml",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_g9isq3m",
					"labelPosition": "auto",
					"control": "$LookupAttribute_g9isq3m",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NumberInput_r0vs4z3",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_6e4quxx",
					"labelPosition": "auto",
					"control": "$NumberAttribute_6e4quxx",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "TabPanel_hty9wym",
				"values": {
					"type": "crt.TabPanel",
					"items": [],
					"mode": "toggle",
					"fitContent": true,
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"layoutConfig": {}
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabContainer_ijz9xv0",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(TabContainer_ijz9xv0_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_hty9wym",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_2i3mq0j",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "TabContainer_ijz9xv0",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_yr2m1uw",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_yr2m1uw_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_2i3mq0j",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_u6e8wpr",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column"
				},
				"parentName": "TabContainer_ijz9xv0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactCompactProfile_ve8gb2d",
				"values": {
					"type": "crt.ContactCompactProfile",
					"readonly": true,
					"visible": true,
					"referenceColumn": "$LookupAttribute_qbab6j2"
				},
				"parentName": "FlexContainer_u6e8wpr",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EmailInput_8lt1reu",
				"values": {
					"type": "crt.EmailInput",
					"label": "$Resources.Strings.LkmnApplicantEmail",
					"control": "$LkmnApplicantEmail",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false,
					"caption": "#ResourceString(EmailInput_8lt1reu_caption)#",
					"layoutConfig": {},
					"readonly": true
				},
				"parentName": "FlexContainer_u6e8wpr",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_lfkrmhk",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": true
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_3n5zt77",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_s6wf03o",
					"labelPosition": "auto",
					"control": "$LookupAttribute_s6wf03o",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_lfkrmhk",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_kmv1osp",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_nge6xt9",
					"labelPosition": "auto",
					"control": "$LookupAttribute_nge6xt9",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_lfkrmhk",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_sc8m1b4",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_n9l1rua",
					"labelPosition": "auto",
					"control": "$LookupAttribute_n9l1rua",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_lfkrmhk",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "RichTextEditor_0k5r9ce",
				"values": {
					"type": "crt.RichTextEditor",
					"label": "#ResourceString(RichTextEditor_0k5r9ce_label)#",
					"labelPosition": "above",
					"control": "$StringAttribute_s9r5zvj",
					"visible": true,
					"placeholder": "#ResourceString(RichTextEditor_0k5r9ce_placeholder)#",
					"tooltip": "",
					"toolbarDisplayMode": null
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabContainer_xqj6o1y",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_xqj6o1y_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_qgx1sf4",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					}
				},
				"parentName": "TabContainer_xqj6o1y",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_3vqxaip",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_3vqxaip_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "TabContainer_xqj6o1y",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_9829o7k",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_3vqxaip",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_gzydsb3",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_9829o7k",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_60km0vp",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_60km0vp_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "LkmnTestExpenses",
							"defaultValues": [
								{
									"attributeName": "LkmnTest",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_gzydsb3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_u9idqvx",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_u9idqvx_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_7oawjshDS"
						}
					}
				},
				"parentName": "FlexContainer_gzydsb3",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_rg87pyl",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_rg87pyl_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_gzydsb3",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_gdktbw8",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_gdktbw8_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_7oawjsh"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_rg87pyl",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_62s0n7f",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_62s0n7f_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "LkmnTestExpenses"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_rg87pyl",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_xxstt9i",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_xxstt9i_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_7oawjsh"
					]
				},
				"parentName": "FlexContainer_gzydsb3",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_f7rzhql",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_3vqxaip",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_7oawjsh",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_7oawjsh",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_7oawjshDS_Id",
					"columns": [
						{
							"id": "d589c9db-57f1-0693-5049-17c97e5c1854",
							"code": "GridDetail_7oawjshDS_LkmnAmount",
							"path": "LkmnAmount",
							"caption": "#ResourceString(GridDetail_7oawjshDS_LkmnAmount)#",
							"dataValueType": 6
						},
						{
							"id": "b1c9e6c9-2170-6d2d-fe52-7905dc35a2c3",
							"code": "GridDetail_7oawjshDS_LkmnType",
							"path": "LkmnType",
							"caption": "#ResourceString(GridDetail_7oawjshDS_LkmnType)#",
							"dataValueType": 10,
							"referenceSchemaName": "LkmnTestExpenseType"
						},
						{
							"id": "c8bd9944-4bb7-d580-8f9d-266915ef6e5f",
							"code": "GridDetail_7oawjshDS_LkmnComment",
							"caption": "#ResourceString(GridDetail_7oawjshDS_LkmnComment)#",
							"dataValueType": 28
						},
						{
							"id": "776bc4aa-c8bf-0861-f406-7879b873e975",
							"code": "GridDetail_7oawjshDS_LkmnImported",
							"path": "LkmnImported",
							"caption": "#ResourceString(GridDetail_7oawjshDS_LkmnImported)#",
							"dataValueType": 12
						}
					]
				},
				"parentName": "GridContainer_f7rzhql",
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
					"LkmnName": {
						"modelConfig": {
							"path": "PDS.LkmnName"
						}
					},
					"StringAttribute_s9r5zvj": {
						"modelConfig": {
							"path": "PDS.LkmnDescription"
						}
					},
					"LookupAttribute_qbab6j2": {
						"modelConfig": {
							"path": "PDS.LkmnApplicant"
						}
					},
					"LookupAttribute_g9isq3m": {
						"modelConfig": {
							"path": "PDS.LkmnOwner"
						}
					},
					"LookupAttribute_s6wf03o": {
						"modelConfig": {
							"path": "PDS.LkmnStatus"
						}
					},
					"LookupAttribute_nge6xt9": {
						"modelConfig": {
							"path": "PDS.LkmnCategory"
						}
					},
					"LookupAttribute_n9l1rua": {
						"modelConfig": {
							"path": "PDS.LkmnSubcategory"
						}
					},
					"NumberAttribute_6e4quxx": {
						"modelConfig": {
							"path": "PDS.LkmnTotal"
						}
					},
					"LkmnApplicantEmail": {
						"modelConfig": {
							"path": "PDS.LkmnApplicantEmail"
						}
					},
					"GridDetail_7oawjsh": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_7oawjshDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "LkmnAmount"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_7oawjshDS_LkmnAmount": {
									"modelConfig": {
										"path": "GridDetail_7oawjshDS.LkmnAmount"
									}
								},
								"GridDetail_7oawjshDS_LkmnType": {
									"modelConfig": {
										"path": "GridDetail_7oawjshDS.LkmnType"
									}
								},
								"GridDetail_7oawjshDS_LkmnComment": {
									"modelConfig": {
										"path": "GridDetail_7oawjshDS.LkmnComment"
									}
								},
								"GridDetail_7oawjshDS_LkmnImported": {
									"modelConfig": {
										"path": "GridDetail_7oawjshDS.LkmnImported"
									}
								},
								"GridDetail_7oawjshDS_Id": {
									"modelConfig": {
										"path": "GridDetail_7oawjshDS.Id"
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
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_7oawjshDS": [
							{
								"attributePath": "LkmnTest",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "LkmnTestApplication",
							"attributes": {
								"LkmnApplicantEmail": {
									"path": "LkmnApplicant.Email",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_7oawjshDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "LkmnTestExpenses",
							"attributes": {
								"LkmnAmount": {
									"path": "LkmnAmount"
								},
								"LkmnType": {
									"path": "LkmnType"
								},
								"LkmnComment": {
									"path": "LkmnComment"
								},
								"LkmnImported": {
									"path": "LkmnImported"
								}
							}
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