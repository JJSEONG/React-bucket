// bucket.js

// Actions
const CREATE = 'bucket/CREATE';
const DELETE = 'bucket/DELETE';

const initalState = {
  list: ["영화관 가기", "매일 책읽기", "수영 배우기", "React 공부하기"]
};

// Action Creators
export function createBucket(bucket) {
  console.log("액션 생성!")
  return { type: CREATE, bucket: bucket };
}

export function deleteBucket(bucket_index) {
  console.log("지울 버킷리스트", bucket_index);
  return {type: DELETE, bucket_index}
}

// Reducer
export default function reducer(state = initalState, action = {}) {
  switch (action.type) {
    case "bucket/CREATE": {
      console.log("리듀서로 값을 변경!")
      const new_bucket_list = [...state.list, action.bucket];
      return { list : new_bucket_list };
    }

    case "bucket/DELETE": {
      console.log(state, action)
      const new_bucket_list = state.list.filter((l, idx) => {
        return parseInt(action.bucket_index) !== idx
      })

      return {list: new_bucket_list};
    }
    // do reducer stuff
    default: return state;
  }
}