import {
  OutputFileEntry,
  SourceTypes,
  UploadcareFile
} from '@uploadcare/file-uploader';

type MocksType = {
  title: string;
  text: string;
  photos: OutputFileEntry<'success'>[];
};

const createFileInfo = (
  uuid: string,
  name: string,
  size: number,
  width: number,
  height: number
): UploadcareFile => ({
  uuid,
  name,
  size,
  isStored: true,
  isImage: true,
  mimeType: 'image/jpeg',
  cdnUrl: `https://ucarecdn.com/${uuid}/`,
  s3Url: null,
  originalFilename: name,
  imageInfo: {
    dpi: [72, 72],
    width,
    height,
    format: 'JPEG',
    sequence: false,
    colorMode: 'RGB',
    orientation: null,
    geoLocation: null,
    datetimeOriginal: null
  },
  videoInfo: null,
  contentInfo: {
    mime: {
      mime: 'image/jpeg',
      type: 'image',
      subtype: 'jpeg'
    },
    image: {
      dpi: [72, 72],
      width,
      height,
      format: 'JPEG',
      sequence: false,
      colorMode: 'RGB',
      orientation: null,
      geoLocation: null,
      datetimeOriginal: null
    }
  },
  metadata: {},
  s3Bucket: null,
  defaultEffects: null
});

const createPhoto = (
  uuid: string,
  internalId: string,
  name: string,
  size: number,
  width: number,
  height: number
): OutputFileEntry<'success'> => ({
  uuid,
  internalId,
  name,
  size,
  isImage: true,
  mimeType: 'image/jpeg',
  file: null,
  externalUrl: null,
  cdnUrlModifiers: '',
  cdnUrl: `https://ucarecdn.com/${uuid}/`,
  fullPath: `/${name}`,
  uploadProgress: 100,
  fileInfo: createFileInfo(uuid, name, size, width, height),
  metadata: {},
  isSuccess: true,
  isUploading: false,
  isFailed: false,
  isRemoved: false,
  errors: [],
  status: 'success',
  source: null as SourceTypes | null,
  isValidationPending: false
});

const mocks: MocksType = {
  title: 'A Romantic Weekend Getaway in Paris',
text: `Paris, often referred to as the "City of Love" and the "City of Lights," is a dream destination for many travelers around the world. With its rich history, stunning architecture, delectable cuisine, and an unmistakable romantic atmosphere, Paris offers an unforgettable experience. In this blog post, we'll take you on a journey through our recent weekend trip to Paris, where we gazed at the iconic Eiffel Tower, indulged in heavenly croissants, and immersed ourselves in the city's captivating charm.

# Day 1: Arrival in the City of Love
...`,
  photos: [
    createPhoto(
      '1be82782-2cfe-4269-8ea3-da4279a1c7f4',
      '6GYw7vtML-Z6K',
      'arthur-humeau-3xwdarHxHqI-unsplash.jpg',
      1657550,
      2400,
      3600
    ),
    createPhoto(
      '57a9505d-1118-4f0b-8417-0efa780e35f6',
      'qOqnI0Svy-nMY',
      'bharat-patil-WR5_Ev_bh-I-unsplash.jpg',
      974188,
      2400,
      1600
    ),
    createPhoto(
      '040b5f13-ff2c-4d06-995a-3f8e3ece1ae7',
      '38Mr9577M-2JE',
      'chris-karidis-nnzkZNYWHaU-unsplash.jpg',
      535450,
      2400,
      1596
    ),
    createPhoto(
      '8fbd0e17-51ff-4804-a4cf-09c228a8526a',
      'NxiT0MrhJ-oXS',
      'earth-DXuxHw3S5ak-unsplash.jpg',
      673331,
      1600,
      2000
    ),
    createPhoto(
      'b127ad22-c76b-4712-9f7a-c76561b61610',
      'uWUiPJQTo-YlY',
      'john-towner-Hf4Ap1-ef40-unsplash.jpg',
      1868140,
      2400,
      3438
    )
  ]
};

export default mocks;
