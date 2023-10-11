// eslint-disable-next-line @typescript-eslint/no-unused-vars
import SQLite from 'react-native-sqlite-storage';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const db = SQLite.openDatabase({
  name: 'myDatabese.db',
  location: 'default',
});

export const newNameSuratTable = async (): Promise<any> => {
  (await db).transaction((tx: any) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS name_surahs(id INTEGER PRIMARY KEY, name TEXT, name_latian TEXT,number TEXT,number_of_ayah TEXT)',
      [],
      () => {
        console.log('table name surahs telah di buat')
      },
      (error: string) => {
        console.log(error, "error")
      },
    );
  });
}

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

export const insertNameSurat = async (
  numberPros: string,
  jsonData: any,
): Promise<void> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (await db).transaction((tx: any) => {
    tx.executeSql(
      'INSERT INTO name_surahs (number, name, name_latian, number_of_ayah) VALUES (?, ?, ?, ?)',
      [
        jsonData[numberPros]['number'],
        jsonData[numberPros]['name'],
        jsonData[numberPros]['name_latin'],
        jsonData[numberPros]['number_of_ayah']
      ],
      () => {
        console.log('Data berhasil dimasukkan ke dalam tabel name surahs' + `${numberPros}`);
      },
      (error: any) => {
        console.log('Gagal memasukkan data:', error);
      },
    );
  });
};

export const fetchDataNameSurat = async (): Promise<any[]> => {
  return new Promise(async (resolve, reject) => {
    (await db).transaction(tx => {
      tx.executeSql(
        'SELECT * FROM name_surahs',
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

export const insertData = async (
  numberPros: string,
  jsonData: any,
): Promise<void> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  console.log('delet data');
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
