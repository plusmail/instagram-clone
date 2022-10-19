import './AuthTemplate.css';

/*
 * 회원가입/로그인 페이지의 레이아웃을 담당하는 컴포넌트입니다.
 */

const AuthTemplate = ({ children }) => {
  return <div className="AuthTemplateBlock">{children}</div>;
};

export default AuthTemplate;
