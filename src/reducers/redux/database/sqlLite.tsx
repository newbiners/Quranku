
import SQLite from 'react-native-sqlite-storage';
const db = SQLite.openDatabase({
  name: 'myDatabese.db',
  location: 'default',
});

export const newTable = async (): Promise<any> => {
  (await db).transaction((tx: any) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS surahs (id INTEGER PRIMARY KEY, name TEXT, name_latian TEXT,number TEXT,number_of_ayah TEXT, text JSON, translations JSON)',
      [],
      () => {
        console.log('Table telah di buat surat');
      },
      (error: string) => {
        console.log(error, 'error');
      },
    );
  });
};

export const insertData = async (
  numberPros: string,
  jsonData: any,
): Promise<void> => {
  (await db).transaction((tx: any) => {
    tx.executeSql(
      'INSERT INTO surahs (number, name, name_latian, number_of_ayah, text, translations) VALUES (?, ?, ?, ?, ?, ?)',
      [
        jsonData[numberPros]['number'],
        jsonData[numberPros]['name'],
        jsonData[numberPros]['name_latin'],
        jsonData[numberPros]['number_of_ayah'],
        JSON.stringify(jsonData[numberPros]['text']),
        JSON.stringify(jsonData[numberPros]['translations']),
      ],
      () => {
        console.log('Data berhasil dimasukkan ke dalam tabel surahs' + `${numberPros}`);
      },
      (error: any) => {
        console.log('Gagal memasukkan data:', error);
      },
    );
  });
};

export async function deleteDatajuzById(itemId: any): Promise<any> {
  (await db).transaction(tx => {
    tx.executeSql(
      'DELETE FROM juz WHERE id = ?',
      [itemId],
      (_tx: any, results) => {
        if (results.rowsAffected > 0) {
          console.log('Item berhasil dihapus');
        } else {
          console.log('Item tidak ditemukan');
        }
      },
      error => {
        console.error('Error saat menghapus item: ', error);
      },
    );
  });
}


export const fetchData = async (number: any): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    (await db).transaction(tx => {
      tx.executeSql(
        'SELECT * FROM surahs WHERE id = ?',
        [number],
        (_tx: any, results) => {
          if (results.rows.length > 0) {
            const rowData = results.rows.item(0);
            resolve(rowData);
          } else {
            reject('Data tidak ditemukan');
          }
        },
        error => {
          reject('Terjadi kesalahan dalam eksekusi SQL: ' + error);
        },
      );
    });
  });
};

export const fetchDataAll = async (): Promise<any[]> => {
  return new Promise(async (resolve, reject) => {
    (await db).transaction(tx => {
      tx.executeSql(
        'SELECT * FROM surahs',
        [],
        (_tx: any, results) => {
          const rowData = [];
          for (let i = 0; i < results.rows.length; i++) {
            rowData.push(results.rows.item(i));
          }
          if (rowData.length > 0) {
            resolve(rowData);
          } else {
            reject('Data tidak ditemukan');
          }
        },
        error => {
          reject('Terjadi kesalahan dalam eksekusi SQL: ' + error);
        },
      );
    });
  });
};

export const deleteAllData = async (): Promise<any> => {
  (await db).transaction(tx => {
    tx.executeSql(
      'DELETE FROM surahs',
      [],
      () => {
        console.log('Semua data dari tabel surahs berhasil dihapus.');
      },
      error => {
        console.error('Gagal menghapus data:', error);
      },
    );
  });
};

export async function deleteItemById(itemId: any): Promise<any> {
  (await db).transaction(tx => {
    tx.executeSql(
      'DELETE FROM surahs WHERE id = ?',
      [itemId],
      (_tx: any, results) => {
        if (results.rowsAffected > 0) {
          console.log('Item berhasil dihapus');
        } else {
          console.log('Item tidak ditemukan');
        }
      },
      error => {
        console.error('Error saat menghapus item: ', error);
      },
    );
  });
}

export const newJuzTable = async (): Promise<any> => {
  (await db).transaction((tx: any) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS juzs (id INTEGER PRIMARY KEY, number TEXT, mulai_dari TEXT, data JSON)',
      [],
      () => {
        console.log('table juz telah di buat')
      },
      (error: string) => {
        console.log(error, "error")
      },
    );
  });
}


export const insertDataJuz = async (
  numberPros: string,
  jsonData: any,
): Promise<void> => {
  (await db).transaction((tx: any) => {
    tx.executeSql(
      'INSERT INTO juzs (number, mulai_dari, data) VALUES (?, ?, ?)',
      [
        jsonData[numberPros]['number'],
        jsonData[numberPros]['mulai_dari'],
        JSON.stringify(jsonData[numberPros]['data']),
      ],
      () => {
        console.log('Data berhasil dimasukkan ke dalam tabel name juz ' + `${numberPros}`);
      },
      (error: any) => {
        console.log('Gagal memasukkan data:', error);
      },
    );
  });
};


export const fetchDataJuz = async (): Promise<any[]> => {
  return new Promise(async (resolve, reject) => {
    (await db).transaction(tx => {
      tx.executeSql(
        'SELECT * FROM juzs',
        [],
        (_tx: any, results) => {
          const rowData = [];
          for (let i = 0; i < results.rows.length; i++) {
            rowData.push(results.rows.item(i));
          }
          if (rowData.length > 0) {
            resolve(rowData);
          } else {
            reject('Data tidak ditemukan');
          }
        },
        error => {
          reject('Terjadi kesalahan dalam eksekusi SQL: ' + error);
        },
      );
    });
  });
};


export const fetchDataJuzById = async (number: any): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    (await db).transaction(tx => {
      tx.executeSql(
        'SELECT * FROM juzs WHERE id = ?',
        [number],
        (_tx: any, results) => {
          if (results.rows.length > 0) {
            const rowData = results.rows.item(0);
            resolve(rowData);
          } else {
            reject('Data tidak ditemukan');
          }
        },
        error => {
          reject('Terjadi kesalahan dalam eksekusi SQL: ' + error);
        },
      );
    });
  });
};

export const deleteDataJuzAll = async (): Promise<any> => {
  (await db).transaction(tx => {
    tx.executeSql(
      'DELETE FROM juzs',
      [],
      () => {
        console.log('Semua data dari tabel juz berhasil dihapus.');
      },
      error => {
        console.error('Gagal menghapus data:', error);
      },
    );
  });
};


export const newTableBookmark = async (): Promise<any> => {
  (await db).transaction((tx:any) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS Bookmarks (id INTEGER PRIMARY KEY, number TEXT, name TEXT, name_latian TEXT)',
      [],
      () => {
        console.log('Table bookmark telah di buat');
      },
      (error: String) => {
        console.log(error, "error")
      }
    )
  })
}


export const AddBookmark =async(
  jsonData: any): Promise<void> => {
    (await db).transaction((tx: any) => {
      tx.executeSql(
        'INSERT INTO Bookmarks (number, name, name_latian) VALUES (?,?,?)',
        [
          jsonData['number'],
          jsonData['name'],
          jsonData['name_latian'],
        ],
        () => {
          console.log('Data berhasil dimasukkan ke dalam tabel Bookmarks');
        },
        (error: any) => {
          console.log('Gagal memasukkan data:', error);
        },
      );
    });
}

export const fetchDataBookmark = async (): Promise<any[]> => {
  return new Promise(async (resolve, reject) => {
    (await db).transaction(tx => {
      tx.executeSql(
        'SELECT * FROM Bookmarks',
        [],
        (_tx: any, results) => {
          const rowData = [];
          for (let i = 0; i < results.rows.length; i++) {
            rowData.push(results.rows.item(i));
          }
          if (rowData.length > 0) {
            resolve(rowData);
          } else {
            reject('Data tidak ditemukan');
          }
        },
        error => {
          reject('Terjadi kesalahan dalam eksekusi SQL: ' + error);
        },
      );
    });
  });
};


export const fetchDataBookmarkById = async (number: string): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    (await db).transaction(tx => {
      tx.executeSql(
        'SELECT * FROM Bookmarks WHERE number = ?',
        [`${number}`],
        (_tx: any, results) => {
          if (results.rows.length > 0) {
            const rowData = results.rows.item(0);
            resolve(rowData);
          } else {
            reject('Data tidak ditemukan');
          }
        },
        error => {
          reject('Terjadi kesalahan dalam eksekusi SQL: ' + error);
        },
      );
    });
  });
};

export async function deletebookmarkById(number: string): Promise<any> {
  (await db).transaction(tx => {
    tx.executeSql(
      'DELETE FROM Bookmarks WHERE number = ?',
      [`${number}`],
      (_tx: any, results) => {
        if (results.rowsAffected > 0) {
          console.log('Item berhasil dihapus');
        } else {
          console.log('Item tidak ditemukan');
        }
      },
      error => {
        console.error('Error saat menghapus item: ', error);
      },
    );
  });
}