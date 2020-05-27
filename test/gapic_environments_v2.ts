// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as environmentsModule from '../src';

import {PassThrough} from 'stream';

import {protobuf} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (instance.constructor as typeof protobuf.Message).toObject(
    instance as protobuf.Message<T>,
    {defaults: true}
  );
  return (instance.constructor as typeof protobuf.Message).fromObject(
    filledObject
  ) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
  return error
    ? sinon.stub().rejects(error)
    : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  return error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
}

function stubPageStreamingCall<ResponseType>(
  responses?: ResponseType[],
  error?: Error
) {
  const pagingStub = sinon.stub();
  if (responses) {
    for (let i = 0; i < responses.length; ++i) {
      pagingStub.onCall(i).callsArgWith(2, null, responses[i]);
    }
  }
  const transformStub = error
    ? sinon.stub().callsArgWith(2, error)
    : pagingStub;
  const mockStream = new PassThrough({
    objectMode: true,
    transform: transformStub,
  });
  // trigger as many responses as needed
  if (responses) {
    for (let i = 0; i < responses.length; ++i) {
      setImmediate(() => {
        mockStream.write({});
      });
    }
    setImmediate(() => {
      mockStream.end();
    });
  } else {
    setImmediate(() => {
      mockStream.write({});
    });
    setImmediate(() => {
      mockStream.end();
    });
  }
  return sinon.stub().returns(mockStream);
}

function stubAsyncIterationCall<ResponseType>(
  responses?: ResponseType[],
  error?: Error
) {
  let counter = 0;
  const asyncIterable = {
    [Symbol.asyncIterator]() {
      return {
        async next() {
          if (error) {
            return Promise.reject(error);
          }
          if (counter >= responses!.length) {
            return Promise.resolve({done: true, value: undefined});
          }
          return Promise.resolve({done: false, value: responses![counter++]});
        },
      };
    },
  };
  return sinon.stub().returns(asyncIterable);
}

describe('v2.EnvironmentsClient', () => {
  it('has servicePath', () => {
    const servicePath = environmentsModule.v2.EnvironmentsClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint = environmentsModule.v2.EnvironmentsClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = environmentsModule.v2.EnvironmentsClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no option', () => {
    const client = new environmentsModule.v2.EnvironmentsClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new environmentsModule.v2.EnvironmentsClient({
      fallback: true,
    });
    assert(client);
  });

  it('has initialize method and supports deferred initialization', async () => {
    const client = new environmentsModule.v2.EnvironmentsClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.environmentsStub, undefined);
    await client.initialize();
    assert(client.environmentsStub);
  });

  it('has close method', () => {
    const client = new environmentsModule.v2.EnvironmentsClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.close();
  });

  it('has getProjectId method', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new environmentsModule.v2.EnvironmentsClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
    const result = await client.getProjectId();
    assert.strictEqual(result, fakeProjectId);
    assert((client.auth.getProjectId as SinonStub).calledWithExactly());
  });

  it('has getProjectId method with callback', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new environmentsModule.v2.EnvironmentsClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.auth.getProjectId = sinon
      .stub()
      .callsArgWith(0, null, fakeProjectId);
    const promise = new Promise((resolve, reject) => {
      client.getProjectId((err?: Error | null, projectId?: string | null) => {
        if (err) {
          reject(err);
        } else {
          resolve(projectId);
        }
      });
    });
    const result = await promise;
    assert.strictEqual(result, fakeProjectId);
  });

  describe('listEnvironments', () => {
    it('invokes listEnvironments without error', async () => {
      const client = new environmentsModule.v2.EnvironmentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.dialogflow.v2.ListEnvironmentsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.dialogflow.v2.Environment()
        ),
        generateSampleMessage(
          new protos.google.cloud.dialogflow.v2.Environment()
        ),
        generateSampleMessage(
          new protos.google.cloud.dialogflow.v2.Environment()
        ),
      ];
      client.innerApiCalls.listEnvironments = stubSimpleCall(expectedResponse);
      const [response] = await client.listEnvironments(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.listEnvironments as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes listEnvironments without error using callback', async () => {
      const client = new environmentsModule.v2.EnvironmentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.dialogflow.v2.ListEnvironmentsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.dialogflow.v2.Environment()
        ),
        generateSampleMessage(
          new protos.google.cloud.dialogflow.v2.Environment()
        ),
        generateSampleMessage(
          new protos.google.cloud.dialogflow.v2.Environment()
        ),
      ];
      client.innerApiCalls.listEnvironments = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.listEnvironments(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.dialogflow.v2.IEnvironment[] | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.listEnvironments as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes listEnvironments with error', async () => {
      const client = new environmentsModule.v2.EnvironmentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.dialogflow.v2.ListEnvironmentsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.listEnvironments = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.listEnvironments(request), expectedError);
      assert(
        (client.innerApiCalls.listEnvironments as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes listEnvironmentsStream without error', async () => {
      const client = new environmentsModule.v2.EnvironmentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.dialogflow.v2.ListEnvironmentsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.dialogflow.v2.Environment()
        ),
        generateSampleMessage(
          new protos.google.cloud.dialogflow.v2.Environment()
        ),
        generateSampleMessage(
          new protos.google.cloud.dialogflow.v2.Environment()
        ),
      ];
      client.descriptors.page.listEnvironments.createStream = stubPageStreamingCall(
        expectedResponse
      );
      const stream = client.listEnvironmentsStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.dialogflow.v2.Environment[] = [];
        stream.on(
          'data',
          (response: protos.google.cloud.dialogflow.v2.Environment) => {
            responses.push(response);
          }
        );
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      const responses = await promise;
      assert.deepStrictEqual(responses, expectedResponse);
      assert(
        (client.descriptors.page.listEnvironments.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listEnvironments, request)
      );
      assert.strictEqual(
        (client.descriptors.page.listEnvironments
          .createStream as SinonStub).getCall(0).args[2].otherArgs.headers[
          'x-goog-request-params'
        ],
        expectedHeaderRequestParams
      );
    });

    it('invokes listEnvironmentsStream with error', async () => {
      const client = new environmentsModule.v2.EnvironmentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.dialogflow.v2.ListEnvironmentsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedError = new Error('expected');
      client.descriptors.page.listEnvironments.createStream = stubPageStreamingCall(
        undefined,
        expectedError
      );
      const stream = client.listEnvironmentsStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.dialogflow.v2.Environment[] = [];
        stream.on(
          'data',
          (response: protos.google.cloud.dialogflow.v2.Environment) => {
            responses.push(response);
          }
        );
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      await assert.rejects(promise, expectedError);
      assert(
        (client.descriptors.page.listEnvironments.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listEnvironments, request)
      );
      assert.strictEqual(
        (client.descriptors.page.listEnvironments
          .createStream as SinonStub).getCall(0).args[2].otherArgs.headers[
          'x-goog-request-params'
        ],
        expectedHeaderRequestParams
      );
    });

    it('uses async iteration with listEnvironments without error', async () => {
      const client = new environmentsModule.v2.EnvironmentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.dialogflow.v2.ListEnvironmentsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.dialogflow.v2.Environment()
        ),
        generateSampleMessage(
          new protos.google.cloud.dialogflow.v2.Environment()
        ),
        generateSampleMessage(
          new protos.google.cloud.dialogflow.v2.Environment()
        ),
      ];
      client.descriptors.page.listEnvironments.asyncIterate = stubAsyncIterationCall(
        expectedResponse
      );
      const responses: protos.google.cloud.dialogflow.v2.IEnvironment[] = [];
      const iterable = client.listEnvironmentsAsync(request);
      for await (const resource of iterable) {
        responses.push(resource!);
      }
      assert.deepStrictEqual(responses, expectedResponse);
      assert.deepStrictEqual(
        (client.descriptors.page.listEnvironments
          .asyncIterate as SinonStub).getCall(0).args[1],
        request
      );
      assert.strictEqual(
        (client.descriptors.page.listEnvironments
          .asyncIterate as SinonStub).getCall(0).args[2].otherArgs.headers[
          'x-goog-request-params'
        ],
        expectedHeaderRequestParams
      );
    });

    it('uses async iteration with listEnvironments with error', async () => {
      const client = new environmentsModule.v2.EnvironmentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.dialogflow.v2.ListEnvironmentsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedError = new Error('expected');
      client.descriptors.page.listEnvironments.asyncIterate = stubAsyncIterationCall(
        undefined,
        expectedError
      );
      const iterable = client.listEnvironmentsAsync(request);
      await assert.rejects(async () => {
        const responses: protos.google.cloud.dialogflow.v2.IEnvironment[] = [];
        for await (const resource of iterable) {
          responses.push(resource!);
        }
      });
      assert.deepStrictEqual(
        (client.descriptors.page.listEnvironments
          .asyncIterate as SinonStub).getCall(0).args[1],
        request
      );
      assert.strictEqual(
        (client.descriptors.page.listEnvironments
          .asyncIterate as SinonStub).getCall(0).args[2].otherArgs.headers[
          'x-goog-request-params'
        ],
        expectedHeaderRequestParams
      );
    });
  });

  describe('Path templates', () => {
    describe('agent', () => {
      const fakePath = '/rendered/path/agent';
      const expectedParameters = {
        project: 'projectValue',
      };
      const client = new environmentsModule.v2.EnvironmentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.agentPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.agentPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('agentPath', () => {
        const result = client.agentPath('projectValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.agentPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromAgentName', () => {
        const result = client.matchProjectFromAgentName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.agentPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('entityType', () => {
      const fakePath = '/rendered/path/entityType';
      const expectedParameters = {
        project: 'projectValue',
        entity_type: 'entityTypeValue',
      };
      const client = new environmentsModule.v2.EnvironmentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.entityTypePathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.entityTypePathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('entityTypePath', () => {
        const result = client.entityTypePath('projectValue', 'entityTypeValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.entityTypePathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromEntityTypeName', () => {
        const result = client.matchProjectFromEntityTypeName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.entityTypePathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchEntityTypeFromEntityTypeName', () => {
        const result = client.matchEntityTypeFromEntityTypeName(fakePath);
        assert.strictEqual(result, 'entityTypeValue');
        assert(
          (client.pathTemplates.entityTypePathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('environment', () => {
      const fakePath = '/rendered/path/environment';
      const expectedParameters = {
        project: 'projectValue',
        environment: 'environmentValue',
      };
      const client = new environmentsModule.v2.EnvironmentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.environmentPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.environmentPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('environmentPath', () => {
        const result = client.environmentPath(
          'projectValue',
          'environmentValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.environmentPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromEnvironmentName', () => {
        const result = client.matchProjectFromEnvironmentName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.environmentPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchEnvironmentFromEnvironmentName', () => {
        const result = client.matchEnvironmentFromEnvironmentName(fakePath);
        assert.strictEqual(result, 'environmentValue');
        assert(
          (client.pathTemplates.environmentPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('intent', () => {
      const fakePath = '/rendered/path/intent';
      const expectedParameters = {
        project: 'projectValue',
        intent: 'intentValue',
      };
      const client = new environmentsModule.v2.EnvironmentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.intentPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.intentPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('intentPath', () => {
        const result = client.intentPath('projectValue', 'intentValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.intentPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromIntentName', () => {
        const result = client.matchProjectFromIntentName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.intentPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchIntentFromIntentName', () => {
        const result = client.matchIntentFromIntentName(fakePath);
        assert.strictEqual(result, 'intentValue');
        assert(
          (client.pathTemplates.intentPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('project', () => {
      const fakePath = '/rendered/path/project';
      const expectedParameters = {
        project: 'projectValue',
      };
      const client = new environmentsModule.v2.EnvironmentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.projectPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.projectPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('projectPath', () => {
        const result = client.projectPath('projectValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.projectPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromProjectName', () => {
        const result = client.matchProjectFromProjectName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.projectPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('projectAgentEnvironmentUserSessionContext', () => {
      const fakePath =
        '/rendered/path/projectAgentEnvironmentUserSessionContext';
      const expectedParameters = {
        project: 'projectValue',
        environment: 'environmentValue',
        user: 'userValue',
        session: 'sessionValue',
        context: 'contextValue',
      };
      const client = new environmentsModule.v2.EnvironmentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.projectAgentEnvironmentUserSessionContextPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.projectAgentEnvironmentUserSessionContextPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('projectAgentEnvironmentUserSessionContextPath', () => {
        const result = client.projectAgentEnvironmentUserSessionContextPath(
          'projectValue',
          'environmentValue',
          'userValue',
          'sessionValue',
          'contextValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates
            .projectAgentEnvironmentUserSessionContextPathTemplate
            .render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromProjectAgentEnvironmentUserSessionContextName', () => {
        const result = client.matchProjectFromProjectAgentEnvironmentUserSessionContextName(
          fakePath
        );
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates
            .projectAgentEnvironmentUserSessionContextPathTemplate
            .match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchEnvironmentFromProjectAgentEnvironmentUserSessionContextName', () => {
        const result = client.matchEnvironmentFromProjectAgentEnvironmentUserSessionContextName(
          fakePath
        );
        assert.strictEqual(result, 'environmentValue');
        assert(
          (client.pathTemplates
            .projectAgentEnvironmentUserSessionContextPathTemplate
            .match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchUserFromProjectAgentEnvironmentUserSessionContextName', () => {
        const result = client.matchUserFromProjectAgentEnvironmentUserSessionContextName(
          fakePath
        );
        assert.strictEqual(result, 'userValue');
        assert(
          (client.pathTemplates
            .projectAgentEnvironmentUserSessionContextPathTemplate
            .match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchSessionFromProjectAgentEnvironmentUserSessionContextName', () => {
        const result = client.matchSessionFromProjectAgentEnvironmentUserSessionContextName(
          fakePath
        );
        assert.strictEqual(result, 'sessionValue');
        assert(
          (client.pathTemplates
            .projectAgentEnvironmentUserSessionContextPathTemplate
            .match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchContextFromProjectAgentEnvironmentUserSessionContextName', () => {
        const result = client.matchContextFromProjectAgentEnvironmentUserSessionContextName(
          fakePath
        );
        assert.strictEqual(result, 'contextValue');
        assert(
          (client.pathTemplates
            .projectAgentEnvironmentUserSessionContextPathTemplate
            .match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('projectAgentEnvironmentUserSessionEntityType', () => {
      const fakePath =
        '/rendered/path/projectAgentEnvironmentUserSessionEntityType';
      const expectedParameters = {
        project: 'projectValue',
        environment: 'environmentValue',
        user: 'userValue',
        session: 'sessionValue',
        entity_type: 'entityTypeValue',
      };
      const client = new environmentsModule.v2.EnvironmentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.projectAgentEnvironmentUserSessionEntityTypePathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.projectAgentEnvironmentUserSessionEntityTypePathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('projectAgentEnvironmentUserSessionEntityTypePath', () => {
        const result = client.projectAgentEnvironmentUserSessionEntityTypePath(
          'projectValue',
          'environmentValue',
          'userValue',
          'sessionValue',
          'entityTypeValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates
            .projectAgentEnvironmentUserSessionEntityTypePathTemplate
            .render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromProjectAgentEnvironmentUserSessionEntityTypeName', () => {
        const result = client.matchProjectFromProjectAgentEnvironmentUserSessionEntityTypeName(
          fakePath
        );
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates
            .projectAgentEnvironmentUserSessionEntityTypePathTemplate
            .match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchEnvironmentFromProjectAgentEnvironmentUserSessionEntityTypeName', () => {
        const result = client.matchEnvironmentFromProjectAgentEnvironmentUserSessionEntityTypeName(
          fakePath
        );
        assert.strictEqual(result, 'environmentValue');
        assert(
          (client.pathTemplates
            .projectAgentEnvironmentUserSessionEntityTypePathTemplate
            .match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchUserFromProjectAgentEnvironmentUserSessionEntityTypeName', () => {
        const result = client.matchUserFromProjectAgentEnvironmentUserSessionEntityTypeName(
          fakePath
        );
        assert.strictEqual(result, 'userValue');
        assert(
          (client.pathTemplates
            .projectAgentEnvironmentUserSessionEntityTypePathTemplate
            .match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchSessionFromProjectAgentEnvironmentUserSessionEntityTypeName', () => {
        const result = client.matchSessionFromProjectAgentEnvironmentUserSessionEntityTypeName(
          fakePath
        );
        assert.strictEqual(result, 'sessionValue');
        assert(
          (client.pathTemplates
            .projectAgentEnvironmentUserSessionEntityTypePathTemplate
            .match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchEntityTypeFromProjectAgentEnvironmentUserSessionEntityTypeName', () => {
        const result = client.matchEntityTypeFromProjectAgentEnvironmentUserSessionEntityTypeName(
          fakePath
        );
        assert.strictEqual(result, 'entityTypeValue');
        assert(
          (client.pathTemplates
            .projectAgentEnvironmentUserSessionEntityTypePathTemplate
            .match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('projectAgentSessionContext', () => {
      const fakePath = '/rendered/path/projectAgentSessionContext';
      const expectedParameters = {
        project: 'projectValue',
        session: 'sessionValue',
        context: 'contextValue',
      };
      const client = new environmentsModule.v2.EnvironmentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.projectAgentSessionContextPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.projectAgentSessionContextPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('projectAgentSessionContextPath', () => {
        const result = client.projectAgentSessionContextPath(
          'projectValue',
          'sessionValue',
          'contextValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.projectAgentSessionContextPathTemplate
            .render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromProjectAgentSessionContextName', () => {
        const result = client.matchProjectFromProjectAgentSessionContextName(
          fakePath
        );
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.projectAgentSessionContextPathTemplate
            .match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchSessionFromProjectAgentSessionContextName', () => {
        const result = client.matchSessionFromProjectAgentSessionContextName(
          fakePath
        );
        assert.strictEqual(result, 'sessionValue');
        assert(
          (client.pathTemplates.projectAgentSessionContextPathTemplate
            .match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchContextFromProjectAgentSessionContextName', () => {
        const result = client.matchContextFromProjectAgentSessionContextName(
          fakePath
        );
        assert.strictEqual(result, 'contextValue');
        assert(
          (client.pathTemplates.projectAgentSessionContextPathTemplate
            .match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('projectAgentSessionEntityType', () => {
      const fakePath = '/rendered/path/projectAgentSessionEntityType';
      const expectedParameters = {
        project: 'projectValue',
        session: 'sessionValue',
        entity_type: 'entityTypeValue',
      };
      const client = new environmentsModule.v2.EnvironmentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.projectAgentSessionEntityTypePathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.projectAgentSessionEntityTypePathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('projectAgentSessionEntityTypePath', () => {
        const result = client.projectAgentSessionEntityTypePath(
          'projectValue',
          'sessionValue',
          'entityTypeValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.projectAgentSessionEntityTypePathTemplate
            .render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromProjectAgentSessionEntityTypeName', () => {
        const result = client.matchProjectFromProjectAgentSessionEntityTypeName(
          fakePath
        );
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.projectAgentSessionEntityTypePathTemplate
            .match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchSessionFromProjectAgentSessionEntityTypeName', () => {
        const result = client.matchSessionFromProjectAgentSessionEntityTypeName(
          fakePath
        );
        assert.strictEqual(result, 'sessionValue');
        assert(
          (client.pathTemplates.projectAgentSessionEntityTypePathTemplate
            .match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchEntityTypeFromProjectAgentSessionEntityTypeName', () => {
        const result = client.matchEntityTypeFromProjectAgentSessionEntityTypeName(
          fakePath
        );
        assert.strictEqual(result, 'entityTypeValue');
        assert(
          (client.pathTemplates.projectAgentSessionEntityTypePathTemplate
            .match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});
