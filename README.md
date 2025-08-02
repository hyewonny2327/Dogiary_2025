# 🐶 Dogiary

**Dogiary**는 반려견의 성장과 건강, 일상을 기록할 수 있는 반려견 전용 다이어리 웹 애플리케이션입니다.  
2023년에는 **React + JavaScript**로 개발되었으며, 이후 **Next.js + TypeScript** 기반으로 리팩토링 및 마이그레이션하여  
유지보수성과 확장성을 강화하였습니다.

---

## 🚀 기술 스택

- **프레임워크**: Next.js 14 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **폼 관리**: React Hook Form
- **상태 관리**: Zustand
- **데이터 요청**: React Query
- **정적 분석**: ESLint + Prettier

---

## 🌿 브랜치 전략

본 프로젝트는 **기능 개발 브랜치 전략 (feature branch model)** 을 따릅니다.

```
main        ← 최종 배포 브랜치
└─ develop  ← 통합 개발 브랜치
└─ feature/, fix/, chore/* 등의 작업 브랜치
```

### 📌 브랜치 이름 규칙

```
<타입>/<이슈번호>-<작업내용>
```

**타입 종류**:

| 타입        | 설명                           |
| ----------- | ------------------------------ |
| `feature/`  | 새로운 기능 개발               |
| `fix/`      | 버그 수정                      |
| `refactor/` | 리팩토링 (동작 변경 없음)      |
| `style/`    | UI 수정, 스타일만 변경         |
| `docs/`     | 문서 수정                      |
| `chore/`    | 설정, 패키지 등 작업 환경 관련 |

**예시**:

```
feature/12-add-dog-form
fix/27-weight-api-bug
```

---

## ✏️ 커밋 컨벤션

**Conventional Commits** 방식을 사용하여 커밋 메시지를 관리합니다.

### ✅ 커밋 메시지 포맷

```
<이슈번호> <타입>: <커밋 메시지>
```

### 커밋 타입 정리

| 타입       | 설명                                 |
| ---------- | ------------------------------------ |
| `feat`     | 새로운 기능 추가                     |
| `fix`      | 버그 수정                            |
| `refactor` | 코드 리팩토링 (기능 변경 없음)       |
| `style`    | UI 스타일 수정 (마진, 컬러, 폰트 등) |
| `docs`     | 문서 수정                            |
| `chore`    | 설정, 빌드, 패키지 등 코드 외적 작업 |
| `test`     | 테스트 코드 추가 및 수정             |

### 커밋 예시

```
#13 feat : 일기 작성 기능 추가
#14 fix : undefined weight 처리
#15 style : 버튼 여백 및 폰트 수정
```

---

## 📁 디렉토리 구조 (예시)

```
/app             → Next.js App Router 폴더
/components      → 공통 UI 컴포넌트
/features        → 기능별 컴포넌트 및 상태 관리
/public/fonts    → 로컬 폰트 파일
/styles          → Tailwind 설정 및 글로벌 CSS
```
