import './AuthForm.css';
import Button from '../common/Button';
import { Link, NavLink } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';

const textMap = {
  login: '로그인',
  register: '가입',
};

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = textMap[type];
  return (
    <>
      <div className="AuthFormBlock">
        <div className="logo-area">
          <NavLink to="/">
            <img
              src={process.env.PUBLIC_URL + '/img/instaLogo.png'}
              alt="logo"
              width="170"
            />
          </NavLink>
        </div>
        {type === 'register' && (
          <h2>친구들의 사진과 동영상을 보려면 가입하세요.</h2>
        )}
        <form onSubmit={onSubmit}>
          <input
            className="StyledInput"
            autoComplete="username"
            name="username"
            placeholder="사용자 이름"
            onChange={onChange}
            value={form.username}
          />
          {type === 'register' && (
            <input
              className="StyledInput"
              autoComplete="uname"
              name="uname"
              placeholder="성명"
              onChange={onChange}
              value={form.name}
            />
          )}
          <input
            className="StyledInput"
            autoComplete="new-password"
            name="password"
            placeholder="비밀번호"
            type="password"
            onChange={onChange}
            value={form.password}
          />
          {type === 'register' && (
            <input
              className="StyledInput"
              autoComplete="new-password"
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              type="password"
              onChange={onChange}
              value={form.passwordConfirm}
            />
          )}
          {/* 에러를 보여 줌 */}
          {error && <div className="ErrorMessage">{error}</div>}

          <Button className="Button">{text}</Button>
        </form>
      </div>

      {/* 폼 하단에 로그인 혹은 회원가입 링크를 보여 줌 */}
      <div className="Switch">
        {type === 'login' ? (
          <h3>
            계정이 없으신가요?{' '}
            <Link to="/register">
              <span className="blue">가입하기</span>
            </Link>
          </h3>
        ) : (
          <h3>
            계정이 있으신가요?{' '}
            <Link to="/login">
              <span className="blue">로그인</span>
            </Link>
          </h3>
        )}
      </div>
      <div className="App">
        <h4>앱을 다운로드하세요.</h4>
        <a
          href={'https://apps.apple.com/app/instagram/id389801252?vt=lo'}
          target={'_blank'}
          rel="noopener noreferrer"
        >
          <img src={process.env.PUBLIC_URL + '/img/AppStore.png'} alt="logo" />
        </a>

        <a
          href={
            'https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DA93DE25B-ED01-4B5B-B6E3-E4AD1AD7E513%26utm_content%3Dlo%26utm_medium%3Dbadge'
          }
          target={'_blank'}
          rel="noopener noreferrer"
        >
          <img
            src={process.env.PUBLIC_URL + '/img/GoogleStore.png'}
            alt="logo"
          />
        </a>
      </div>
      <footer>
        <div className={'my-footer-box'}>
          <div className={'my-navs-box'}>
            <div className={'my-navs'}>
              <span className={'my-nav'}>
                <a
                  href={'https://about.meta.com/'}
                  target={'_blank'}
                  rel="noopener noreferrer"
                >
                  Meta
                </a>
              </span>
              <span className={'my-nav'}>
                <a
                  href={'https://about.instagram.com/'}
                  target={'_blank'}
                  rel="noopener noreferrer"
                >
                  소개
                </a>
              </span>
              <span className={'my-nav'}>
                <a
                  href={'https://about.instagram.com/blog'}
                  target={'_blank'}
                  rel="noopener noreferrer"
                >
                  블로그
                </a>
              </span>
              <span className={'my-nav'}>
                <a
                  href={'https://about.instagram.com/about-us/careers'}
                  rel="noopener noreferrer"
                >
                  채용 정보
                </a>
              </span>
              <span className={'my-nav'}>
                <a
                  href={'https://help.instagram.com/'}
                  target={'_blank'}
                  rel="noopener noreferrer"
                >
                  도움말
                </a>
              </span>
              <span className={'my-nav'}>
                <a
                  href={'https://developers.facebook.com/docs/instagram'}
                  target={'_blank'}
                  rel="noopener noreferrer"
                >
                  API
                </a>
              </span>
              <span className={'my-nav'}>
                <a
                  href={
                    'https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect'
                  }
                  rel="noopener noreferrer"
                >
                  개인정보처리방침
                </a>
              </span>
              <span className={'my-nav'}>
                <a
                  href={
                    'https://help.instagram.com/581066165581870/?locale=ko_KR'
                  }
                  rel="noopener noreferrer"
                >
                  약관
                </a>
              </span>
              <span className={'my-nav'}>
                <a
                  href={'https://www.instagram.com/directory/profiles/'}
                  rel="noopener noreferrer"
                >
                  인기 계정
                </a>
              </span>
              <span className={'my-nav'}>
                <a
                  href={'https://www.instagram.com/directory/hashtags/'}
                  rel="noopener noreferrer"
                >
                  해시태그
                </a>
              </span>
              <span className={'my-nav'}>
                <a
                  href={'https://www.instagram.com/explore/locations/'}
                  rel="noopener noreferrer"
                >
                  위치
                </a>
              </span>
              <span className={'my-nav'}>
                <a
                  href={'https://www.instagram.com/web/lite/'}
                  rel="noopener noreferrer"
                >
                  Instagram Life
                </a>
              </span>
              <span className={'my-nav'}>
                <a
                  href={
                    'https://www.facebook.com/help/instagram/261704639352628'
                  }
                  target={'_blank'}
                  rel="noopener noreferrer"
                >
                  연락처 업로드 &amp; 비사용자
                </a>
              </span>
            </div>
          </div>
          <div className={'my-else-box'}>
            <span className={'my-else'}>
              한국어 <BsChevronDown />
            </span>
            <span className={'my-else my-else2'}>
              © 2022 Instagram from Meta
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AuthForm;
