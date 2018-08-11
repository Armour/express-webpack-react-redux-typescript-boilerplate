import axios from 'axios';

import { IActionAddNoteRequested, IActionEditNoteRequested, IActionFetchNoteRequested, IActionRemoveNoteRequested } from './types';

const notesUrl = 'api/v1/notes';

export default class NotesAPI {
  public static fetchAll() {
    return axios.get(`${notesUrl}`, {
      headers: {
        Accept: 'application/json',
      },
    }).then((res) => {
      return res.data;
    }).catch((err) => {
      if (err.response != null) {
        throw Error(err.response.data.error.message);
      }
      throw Error(err);
    });
  }

  public static fetch(payload: IActionFetchNoteRequested['payload']) {
    return axios.get(`${notesUrl}/${payload.id}`, {
      headers: {
        Accept: 'application/json',
      },
    }).then((res) => {
      return res.data;
    }).catch((err) => {
      if (err.response != null) {
        throw Error(err.response.data.error.message);
      }
      throw Error(err);
    });
  }

  public static add(payload: IActionAddNoteRequested['payload']) {
    return axios.post(notesUrl, payload, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    }).then((res) => {
      return res.data;
    }).catch((err) => {
      if (err.response != null) {
        throw Error(err.response.data.error.message);
      }
      throw Error(err);
    });
  }

  public static edit(payload: IActionEditNoteRequested['payload']) {
    return axios.put(`${notesUrl}/${payload.id}`, payload, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    }).then((res) => {
      return res.data;
    }).catch((err) => {
      if (err.response != null) {
        throw Error(err.response.data.error.message);
      }
      throw Error(err);
    });
  }

  public static remove(payload: IActionRemoveNoteRequested['payload']) {
    return axios.delete(`${notesUrl}/${payload.id}`, {
      headers: {
        Accept: 'application/json',
      },
    }).then((res) => {
      return res.data;
    }).catch((err) => {
      if (err.response != null) {
        throw Error(err.response.data.error.message);
      }
      throw Error(err);
    });
  }
}
