﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: AppFeatureStateQueryExecutorSchema

	/// <exclude/>
	public class AppFeatureStateQueryExecutorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public AppFeatureStateQueryExecutorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public AppFeatureStateQueryExecutorSchema(AppFeatureStateQueryExecutorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("2f78da26-bcd3-4e5f-a839-3a84fd950fc2");
			Name = "AppFeatureStateQueryExecutor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("f56dd55e-5084-4296-932e-a32f081a1593");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,86,77,111,226,48,16,61,83,169,255,97,196,94,18,9,69,218,43,93,42,181,180,84,57,180,219,21,237,238,161,234,193,36,19,240,42,56,212,118,182,139,170,254,247,157,216,134,56,31,176,92,80,60,126,126,243,230,217,99,35,216,26,213,134,37,8,79,40,37,83,69,166,163,171,205,102,134,76,151,18,213,249,217,199,249,217,160,84,92,44,97,190,85,26,215,23,251,113,189,96,90,72,60,20,167,31,145,241,101,41,153,230,133,56,136,186,21,154,107,142,234,32,96,198,18,93,72,139,32,204,23,137,75,226,131,105,206,148,26,67,45,121,174,153,198,31,37,202,237,237,95,76,74,90,99,240,47,55,152,177,50,215,215,92,164,196,30,232,237,6,139,44,136,77,222,109,3,31,142,224,129,92,129,9,12,143,209,14,195,87,226,229,66,163,20,44,135,164,18,114,84,7,140,225,154,169,102,108,4,125,10,136,247,195,168,174,203,44,132,210,178,172,44,160,106,31,203,69,206,19,139,216,152,239,163,137,131,103,133,146,24,4,38,213,30,64,217,24,134,21,203,96,12,11,210,22,52,167,70,29,7,134,33,84,7,98,240,233,228,161,72,173,194,166,220,123,212,171,34,237,87,106,235,157,22,121,238,228,220,161,110,199,2,27,152,39,43,92,51,83,11,96,59,226,148,12,254,48,9,73,205,54,1,129,239,157,36,45,11,70,224,39,8,47,246,68,168,222,26,12,94,190,22,69,228,3,238,153,96,75,148,149,95,233,154,139,103,193,117,211,53,155,129,216,163,171,52,189,202,115,187,140,244,149,107,161,2,55,109,210,204,120,78,39,42,22,89,1,89,253,57,233,214,31,89,164,138,30,153,84,232,6,59,42,158,65,64,190,198,234,81,242,53,147,91,155,233,39,203,75,135,12,106,242,17,20,165,134,187,146,167,144,121,162,227,52,220,89,60,136,59,110,56,153,116,33,56,153,149,68,42,111,42,137,194,229,248,197,245,138,196,81,47,25,105,54,56,45,214,27,38,185,42,196,19,181,96,116,251,86,178,156,124,139,211,225,200,230,26,180,68,216,130,140,119,187,138,201,67,167,223,205,126,2,230,10,161,170,186,174,43,50,6,204,169,219,115,244,234,55,25,149,115,97,248,82,31,240,113,156,142,221,231,107,228,233,105,187,115,186,49,59,252,236,68,135,92,194,163,70,57,133,195,145,39,231,144,69,205,252,77,175,92,1,18,9,34,188,6,114,32,243,219,105,213,148,105,22,139,155,133,43,165,175,115,155,93,226,114,102,116,131,179,100,5,174,175,65,22,239,192,107,186,189,157,110,218,158,117,74,226,187,235,140,179,161,254,52,3,187,48,154,163,166,235,222,219,243,125,95,236,16,221,182,160,108,164,170,103,162,67,237,205,5,187,237,168,142,139,89,79,150,84,219,149,122,160,111,213,225,185,244,161,97,87,111,31,233,180,72,241,8,45,61,8,116,182,107,226,234,209,250,47,245,254,126,58,69,49,189,248,62,254,100,110,163,228,4,225,62,255,73,234,27,151,234,225,4,244,40,95,182,192,33,76,38,240,181,77,95,253,163,16,75,131,160,253,119,195,239,139,223,116,170,76,48,122,40,244,116,197,196,18,83,183,178,110,20,211,98,150,40,244,155,166,191,163,250,31,76,27,109,6,41,246,15,7,254,189,228,149,9,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("2f78da26-bcd3-4e5f-a839-3a84fd950fc2"));
		}

		#endregion

	}

	#endregion

}

