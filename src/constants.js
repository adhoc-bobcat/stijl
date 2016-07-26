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

export const PRESETS = [
  {
    name: 'Chromium (Rietveld)',
    label: 'chromium-rietveld',
    url: 'https://codereview.chromium.org',
    type: 'rietveld',
  },
  {
    name: 'Chromium (Gerrit)',
    label: 'chromium-gerrit',
    url: 'https://chromium-review.googlesource.com',
    type: 'gerrit',
  },
  {
    name: 'Android AOSP',
    label: 'android-aosp',
    url: 'https://android-review.googlesource.com',
    type: 'gerrit',
  },
];