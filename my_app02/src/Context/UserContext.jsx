// creatContext 데이터 저장소 생성
// 단, 반드시 {creatContext} 를 import 해야함
import { createContext } from "react";

// 초기값은 null 로 지정한다
// 반드시 export 해서 내보내기 해야함
export const UserContext = createContext(null)