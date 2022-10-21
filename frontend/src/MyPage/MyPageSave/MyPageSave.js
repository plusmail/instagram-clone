import img from '../../Suggest/default_profile.png';
import { BsGearWide } from 'react-icons/bs';
import { RiBookmarkLine } from 'react-icons/ri';
import { BsGrid3X3 } from 'react-icons/bs';
import { FaHouseUser } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';
import '../mypageStyle.css';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";

const MyPage = () => {
  // 로그인 유저 아이디 받아오기
  const { auth } = useSelector(({ auth }) => ({ auth: auth.auth }));

  return (
    <div className={'body'}>
      <div className={'my-box'}>
        {/* 프로필 박스 */}
        <div className={'my-profile'}>
          <div className={'my-profile-img-box'}>
            <div className={'my-profile-img'}>
              <img src={img} alt={'profile'} />
            </div>
          </div>

          <section className={'my-profile-text'}>
            <div className={'text-name-box'}>
              {auth ? <h1>{auth.username}</h1> : <h1>응답없음</h1>}
              <div className={'profile-buttons'}>
                <span className={'profile-button'}>프로필 편집</span>
              </div>
              <div className={'my-profile-icons'}>
                <BsGearWide className={'my-profile-icon'} />
              </div>
            </div>
            <div>
              <div className={'my-profile-blank'}></div>
            </div>
            <ul className={'my-profile-else'}>
              <li>게시물 <span>0</span></li>
              <li>팔로워 <span>0</span></li>
              <li>팔로우 <span>0</span></li>
            </ul>
          </section>
        </div>

        {/* 메뉴 버튼 박스 */}
        <div className={'select'}>
          <Link to={'/instagram/user'}><BsGrid3X3 />&nbsp; 게시물</Link>
          <Link to={'/instagram/user/save'} className={'click'}><RiBookmarkLine />&nbsp; 저장됨</Link>
          <Link to={'/instagram/user/tag'}><FaHouseUser />&nbsp; 태그됨</Link>
        </div>

        {/* 게시물 박스 */}
        <div className={'text-boxs'}>
          <div className={'text-box'}>
            <div className={'text-box-icons'}>
              <RiBookmarkLine className={'text-box-icon'} />{' '}
              {/*radius 50% border-box 1px solid 색*/}
            </div>
            <p>저장됨 없음</p>
          </div>
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
      </div>
    </div>
  );
};

export default MyPage;
