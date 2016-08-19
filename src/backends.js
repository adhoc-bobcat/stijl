// Copyright 2016 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { GerritBackend } from './backends/gerrit';
import { RietveldBackend } from './backends/rietveld';
import * as state from './state';

/**
 * Connects to the backend server to fetch the changes.
 * @record
 */
// eslint-disable-next-line no-unused-vars
class BackendInterface {
  /**
   * @return {Promise.<Chagne[]>} Resolved when the all active changes are
   *     loaded.
   */
  fetch() {}
}

/**
 * Creates the backend instance for the given |site|.
 * @param {Site} site - The target site info.
 * @return {BackendInterface} Backend instance for the site.
 */
export const create = (site) => {
  switch (site.type) {
    case state.SiteType.GERRIT:
      return new GerritBackend(site);
    case state.SiteType.RIETVELD:
      return new RietveldBackend(site);
    default:
      // Unknown site type. Return null.
      return null;
  }
};
