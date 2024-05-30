/**
 * Copyright 2018 Shift Devices AG
 * Copyright 2022-2024 Shift Crypto AG
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const debug = import.meta.env.DEV;

/**
 * Returns whether the code is running in QtWebEngine.
 */
export const runningInQtWebEngine = () => {
  return typeof window.qt !== 'undefined';
};

/**
 * Returns whether the code is running in Android.
 */
export const runningInAndroid = () => {
  return typeof window.android !== 'undefined';
};

/**
 * Returns whether the code is running on mobile.
 */
export const runningOnMobile = () => {
  return runningInAndroid();
};
