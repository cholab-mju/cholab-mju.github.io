# Intelligent BioMicrosystems Laboratory (Cho Lab) — website

명지대학교 화학공학과 지능형 바이오 마이크로 시스템 연구실 홈페이지.
<https://cholab-mju.github.io>

[Astro](https://astro.build)로 만든 정적 사이트이며, `main` 브랜치에 push 하면
GitHub Actions가 자동으로 빌드해 GitHub Pages에 배포합니다.

## 내용 수정하기

사이트의 모든 내용은 `src/data/` 안의 YAML 파일에 있습니다. 코드를 몰라도 이 파일만 고치면 됩니다.

| 파일 | 내용 |
|---|---|
| `src/data/news.yaml` | 뉴스/공지 (최신 항목을 맨 위에 추가) |
| `src/data/gallery.yaml` | 갤러리 사진과 캡션 |
| `src/data/members.yaml` | 현재 구성원과 졸업생 |
| `src/data/publications.yaml` | 논문 목록 (num이 큰 순서로 표시). 각 항목의 `insight.ko/en`에 요약(summary)·의의(importance)를 적으면 Insight 패널이 생깁니다 |
| `src/data/professor.yaml` | 교수 소개 |
| `src/data/codes.yaml` | 공개 코드/데이터 |
| `src/data/site.yaml` | 연구실 이름, 주소, 연락처, 메뉴 |
| `src/content/research.md` | Research 페이지 본문 (Markdown) |

논문 PDF 버튼: `publications.yaml`의 `pdf`에 오픈액세스 PDF 주소를 적습니다. 비공개 논문은 출판사 정책이 허용하는 저자 원고(accepted manuscript)만 `public/pdf/`에 올리고 `pdf: /pdf/파일명.pdf`, `pdf_label: PDF (author manuscript)` 처럼 적습니다.

사진은 `public/images/` 아래 폴더에 넣고 YAML에서 `/images/...` 경로로 참조합니다.
긴 변 1600px 이하, 300KB 안팎의 JPEG를 권장합니다 (원본은 Google Drive에 보관).

### 뉴스 추가 예시

```yaml
- date: 2026-11
  title: OOO 학생 학부 연구생 랩 조인! 환영합니다! 😀
  body:
    - 본문 문단 (없으면 body 항목 자체를 생략)
  links:
    - { label: 관련기사 보기, url: https://... }
  photos:
    - /images/news/2026-11-welcome-1.jpg
```

## 로컬에서 미리보기

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # dist/ 에 정적 파일 생성
```

## 배포

`.github/workflows/deploy.yml`이 `main` push마다 실행됩니다. 저장소 Settings → Pages의
Source가 "GitHub Actions"로 설정되어 있어야 합니다.
