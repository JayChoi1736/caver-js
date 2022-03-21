/*
    Copyright 2022 The caver-js Authors
    This file is part of the caver-js library.

    The caver-js library is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    The caver-js library is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with the caver-js. If not, see <http://www.gnu.org/licenses/>.
*/

const FeeDelegatedSmartContractExecutionWithRatio = require('../smartContractExecution/feeDelegatedSmartContractExecutionWithRatio')

/**
 * Represents a fee delegated smart contract execution with ratio transaction wrapper.
 * @class
 * @hideconstructor
 */
class FeeDelegatedSmartContractExecutionWithRatioWrapper {
    /**
     * Creates a fee delegated smart contract execution with ratio transaction wrapper.
     * The wrapper plays an intermediate role for calling static functions of each transaction type in `caver.transaction`.
     * @constructor
     * @param {object} _klaytnCall - An object includes klay rpc calls.
     */
    constructor(klaytnCall) {
        this.klaytnCall = klaytnCall
    }

    /**
     * Calls `FeeDelegatedSmartContractExecutionWithRatio.create`.
     *
     * @param {object} obj - An object defines fields to create a tx.
     * @return {string} An RLP-encoded transaction string.
     */
    create(obj) {
        return FeeDelegatedSmartContractExecutionWithRatio.create(obj, this.klaytnCall)
    }

    /**
     * Calls `FeeDelegatedSmartContractExecutionWithRatio.decode`.
     *
     * @param {string} encoded - RLP-encoded string.
     * @return {string} FeeDelegatedSmartContractExecutionWithRatio instance.
     */
    decode(encoded) {
        return FeeDelegatedSmartContractExecutionWithRatio.decode(encoded, this.klaytnCall)
    }
}

module.exports = FeeDelegatedSmartContractExecutionWithRatioWrapper
