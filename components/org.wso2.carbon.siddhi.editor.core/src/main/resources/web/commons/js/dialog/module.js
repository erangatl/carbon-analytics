/**
 * Copyright (c) 2017, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

define(['./save-to-file-dialog','./replace-confirm-dialog','./open-file-dialog','./close-confirm-dialog',
        './import-file-dialog', './export-file-dialog','./settings-dialog','./close-all-confirm-dialog',
        './delete-confirm-dialog','./open-sample-file-dialog', './docker-export-dialog', './sample-event-dialog',
        './query-store-dialog'],
    function (SaveToFileDialog,ReplaceConfirmDialog,OpenFileDialog,CloseConfirmDialog,ImportFileDialog,
              ExportFileDialog,SettingsDialog,CloseAllConfirmDialog,DeleteConfirmDialog,OpenSampleFileDialog,
              DockerExportDialog, SampleEventDialog, QueryStoreApi) {
    return {
        save_to_file_dialog: SaveToFileDialog,
        open_file_dialog: OpenFileDialog,
        CloseConfirmDialog: CloseConfirmDialog,
        ReplaceConfirmDialog: ReplaceConfirmDialog,
        import_file_dialog: ImportFileDialog,
        export_file_dialog: ExportFileDialog,
        settings_dialog: SettingsDialog,
        CloseAllConfirmDialog: CloseAllConfirmDialog,
        DeleteConfirmDialog: DeleteConfirmDialog,
        open_sample_file_dialog: OpenSampleFileDialog,
        docker_export_dialog: DockerExportDialog,
        sample_event_dialog: SampleEventDialog,
        query_store_api: QueryStoreApi
    };
});
