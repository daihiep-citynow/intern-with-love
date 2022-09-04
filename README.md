# Intern with Love

```bash
|-- README.md
|-- cypress
|   |-- e2e
|   |   `-- HomeScreen.cy.jsx
|   |-- fixtures
|   |   `-- example.json
|   `-- support
|       |-- commands.js
|       `-- e2e.js
|-- cypress.config.js
|-- jest.config.js
|-- jsconfig.json
|-- next.config.js
|-- package-lock.json
|-- package.json
|-- public
|   `-- favicon.ico
`-- src
    |-- __test__
    |   |-- Footer
    |   |   |-- AddressCopyright.test.jsx
    |   |   |-- FooterImage.test.jsx
    |   |   |-- MailCopyright.test.jsx
    |   |   `-- PhoneCopyright.test.jsx
    |   |-- Header
    |   |   |-- HeaderBeta.test.jsx
    |   |   |-- HeaderLogo.test.jsx
    |   |   `-- HomeButton.test.jsx
    |   |-- SongCard.test.jsx
    |   `-- hooks
    |       `-- useLocalStorage.test.jsx
    |-- actions
    |   |-- WeeklyArtist.js
    |   |-- top-song.js
    |   `-- top-video.js
    |-- components
    |   |-- CustomButton
    |   |   |-- CustomButton.module.scss
    |   |   |-- CustomButton.stories.jsx
    |   |   `-- index.jsx
    |   |-- IconButton
    |   |   |-- IconButton.module.scss
    |   |   |-- IconButton.stories.jsx
    |   |   `-- index.jsx
    |   |-- ImageLink
    |   |   |-- ImageLink.stories.jsx
    |   |   `-- index.jsx
    |   `-- TextLink
    |       `-- index.jsx
    |-- constants
    |   |-- WeeklyArtist.js
    |   |-- top-song.js
    |   `-- top-video.js
    |-- dataSources
    |   `-- header-nav
    |       `-- index.js
    |-- db
    |   |-- connection.js
    |   `-- models
    |       `-- Song.js
    |-- hooks
    |   |-- index.jsx
    |   |-- useDebounce.jsx
    |   |-- useFetch.jsx
    |   |-- useLocalStorage.jsx
    |   `-- useLocales.jsx
    |-- layouts
    |   |-- MainLayout
    |   |   `-- index.jsx
    |   |-- SettingLayout
    |   |   `-- index.jsx
    |   `-- components
    |       |-- Footer
    |       |   |-- Footer.stories.jsx
    |       |   |-- FooterCooper
    |       |   |   |-- FooterCooper.module.scss
    |       |   |   |-- FooterCooper.stories.jsx
    |       |   |   `-- index.jsx
    |       |   |-- FooterCopyright
    |       |   |   |-- FooterCopyright.module.scss
    |       |   |   |-- FooterCopyright.stories.jsx
    |       |   |   `-- index.jsx
    |       |   |-- FooterInfo
    |       |   |   |-- FooterInfo.module.scss
    |       |   |   |-- FooterInfo.stories.jsx
    |       |   |   `-- index.jsx
    |       |   |-- components
    |       |   |   |-- AddressCopyright
    |       |   |   |   |-- AddressCopyright.stories.jsx
    |       |   |   |   `-- index.jsx
    |       |   |   |-- CooperImage
    |       |   |   |   |-- CooperImage.module.scss
    |       |   |   |   |-- CopperImage.stories.jsx
    |       |   |   |   `-- index.jsx
    |       |   |   |-- CustomCopyright
    |       |   |   |   |-- CustomCopyright.stories.jsx
    |       |   |   |   `-- index.jsx
    |       |   |   |-- FooterInfoBottom
    |       |   |   |   |-- FooterInfoBottom.module.scss
    |       |   |   |   |-- FooterInfoBottom.stories.jsx
    |       |   |   |   `-- index.jsx
    |       |   |   |-- FooterInfoTop
    |       |   |   |   |-- FooterInfoTop.module.scss
    |       |   |   |   |-- FooterInfoTop.stories.jsx
    |       |   |   |   `-- index.jsx
    |       |   |   |-- MailCopyright
    |       |   |   |   |-- MailCopyright.stories.jsx
    |       |   |   |   `-- index.jsx
    |       |   |   `-- PhoneCopyright
    |       |   |       |-- PhoneCopyright.stories.jsx
    |       |   |       `-- index.jsx
    |       |   `-- index.jsx
    |       `-- Header
    |           |-- Header.module.scss
    |           |-- Header.stories.jsx
    |           |-- HeaderBeta
    |           |   |-- HeaderBeta.module.scss
    |           |   |-- HeaderBeta.stories.jsx
    |           |   `-- index.jsx
    |           |-- HeaderButton
    |           |   |-- HeaderButton.module.scss
    |           |   |-- HeaderButton.stories.jsx
    |           |   `-- index.jsx
    |           |-- HeaderLogin
    |           |   |-- HeaderLogin.module.scss
    |           |   |-- HeaderLogin.stories.jsx
    |           |   `-- index.jsx
    |           |-- HeaderLogo
    |           |   |-- HeaderLogo.module.scss
    |           |   |-- HeaderLogo.stories.jsx
    |           |   `-- index.jsx
    |           |-- HeaderNav
    |           |   |-- HeaderNav.module.scss
    |           |   |-- HeaderNav.stories.jsx
    |           |   `-- index.jsx
    |           |-- HeaderSearch
    |           |   |-- HeaderSearch.module.scss
    |           |   |-- HeaderSearch.stories.jsx
    |           |   `-- index.jsx
    |           |-- components
    |           |   |-- HeaderNavItem
    |           |   |   |-- HeaderNavItem.module.scss
    |           |   |   `-- index.jsx
    |           |   |-- HeaderNavItems
    |           |   |   |-- HeaderNavItems.module.scss
    |           |   |   `-- index.jsx
    |           |   |-- HeaderNavLastItem
    |           |   |   |-- HeaderNavLastItem.module.scss
    |           |   |   `-- index.jsx
    |           |   |-- HeaderSubNav
    |           |   |   |-- HeaderSubNav.module.scss
    |           |   |   |-- HeaderSubNav.stories.jsx
    |           |   |   `-- index.jsx
    |           |   |-- HomeButton
    |           |   |   |-- HomeButton.stories.jsx
    |           |   |   `-- index.jsx
    |           |   |-- SignInButton
    |           |   |   |-- SignInButton.stories.jsx
    |           |   |   `-- index.jsx
    |           |   |-- SignUpButton
    |           |   |   |-- SignUpButton.stories.jsx
    |           |   |   `-- index.jsx
    |           |   `-- UploadButton
    |           |       |-- UploadButton.stories.jsx
    |           |       `-- index.jsx
    |           `-- index.jsx
    |-- locales
    |   |-- en.js
    |   |-- index.js
    |   `-- vi.js
    |-- mains
    |   |-- Carousel
    |   |   |-- Carousel.stories.jsx
    |   |   |-- CarouselImage
    |   |   |   |-- CarouselImage.stories.jsx
    |   |   |   `-- index.jsx
    |   |   `-- index.jsx
    |   |-- LeftBox
    |   |   |-- HotAlbum
    |   |   |   |-- HotAlbum.stories.jsx
    |   |   |   `-- index.jsx
    |   |   |-- HotSong
    |   |   |   |-- HotSong.stories.jsx
    |   |   |   `-- index.jsx
    |   |   |-- HotVideo
    |   |   |   |-- HotVideo.stories.jsx
    |   |   |   `-- index.jsx
    |   |   |-- LeftBox.stories.jsx
    |   |   |-- TopicEvent
    |   |   |   |-- TopicEvent.stories.jsx
    |   |   |   `-- index.jsx
    |   |   |-- WeeklyArtist
    |   |   |   |-- WeeklyArtist.stories.jsx
    |   |   |   `-- index.jsx
    |   |   |-- components
    |   |   |   |-- CustomPlayHeader
    |   |   |   |   |-- CustomPlayHeader.module.scss
    |   |   |   |   |-- CustomPlayHeader.stories.jsx
    |   |   |   |   `-- index.jsx
    |   |   |   |-- CustomTopicEventHeader
    |   |   |   |   |-- CustomTopicEventHeader.module.scss
    |   |   |   |   |-- CustomTopicEventHeader.stories.jsx
    |   |   |   |   `-- index.jsx
    |   |   |   |-- CustomTopicEventSongCard
    |   |   |   |   |-- CustomTopicEventSongCard.module.scss
    |   |   |   |   |-- CustomTopicEventSongCard.stories.jsx
    |   |   |   |   `-- index.jsx
    |   |   |   |-- HotAlbumHeader
    |   |   |   |   |-- HotAlbumHeader.stories.jsx
    |   |   |   |   `-- index.jsx
    |   |   |   |-- HotAlbumItem
    |   |   |   |   |-- HotAlbumItem.module.scss
    |   |   |   |   |-- HotAlbumItem.stories.jsx
    |   |   |   |   `-- index.jsx
    |   |   |   |-- HotAlbumItems
    |   |   |   |   |-- HotAlbumItems.module.scss
    |   |   |   |   |-- HotAlbumItems.stories.jsx
    |   |   |   |   `-- index.jsx
    |   |   |   |-- HotSongItem
    |   |   |   |   |-- HotSongItem.module.scss
    |   |   |   |   |-- HotSongItem.stories.jsx
    |   |   |   |   `-- index.jsx
    |   |   |   |-- HotSongItems
    |   |   |   |   |-- HotSongItems.module.scss
    |   |   |   |   |-- HotSongPlayHeader.stories.jsx
    |   |   |   |   `-- index.jsx
    |   |   |   |-- HotSongPlayHeader
    |   |   |   |   |-- HotSongPlayHeader.stories.jsx
    |   |   |   |   `-- index.jsx
    |   |   |   |-- HotVideoItem
    |   |   |   |   |-- HotVideoItem.module.scss
    |   |   |   |   |-- HotVideoItem.stories.jsx
    |   |   |   |   `-- index.jsx
    |   |   |   |-- HotVideoItems
    |   |   |   |   |-- HotVideoItems.module.scss
    |   |   |   |   |-- HotVideoItems.stories.jsx
    |   |   |   |   `-- index.jsx
    |   |   |   |-- HotVideoLargeItem
    |   |   |   |   |-- HotVideoLargeItem.module.scss
    |   |   |   |   |-- HotVideoLargeItem.stories.jsx
    |   |   |   |   `-- index.jsx
    |   |   |   |-- HotVideoPlayHeader
    |   |   |   |   |-- HotVideoPlayHeader.stories.jsx
    |   |   |   |   `-- index.jsx
    |   |   |   |-- TopicEventFirst
    |   |   |   |   |-- TopicEventFirst.stories.jsx
    |   |   |   |   |-- components
    |   |   |   |   |   |-- TopicEventFirstHeader
    |   |   |   |   |   |   `-- index.jsx
    |   |   |   |   |   |-- TopicEventFirstItem
    |   |   |   |   |   |   `-- index.jsx
    |   |   |   |   |   `-- TopicEventFirstItems
    |   |   |   |   |       |-- TopicEventFirstItems.module.scss
    |   |   |   |   |       `-- index.jsx
    |   |   |   |   `-- index.jsx
    |   |   |   |-- TopicEventFour
    |   |   |   |   |-- TopicEventFour.stories.jsx
    |   |   |   |   |-- components
    |   |   |   |   |   |-- TopicEventFourHeader
    |   |   |   |   |   |   `-- index.jsx
    |   |   |   |   |   |-- TopicEventFourItem
    |   |   |   |   |   |   `-- index.jsx
    |   |   |   |   |   `-- TopicEventFourItems
    |   |   |   |   |       |-- TopicEventFourItems.module.scss
    |   |   |   |   |       `-- index.jsx
    |   |   |   |   `-- index.jsx
    |   |   |   |-- TopicEventSecond
    |   |   |   |   |-- components
    |   |   |   |   |   |-- TopicEventSecondHeader
    |   |   |   |   |   |   `-- index.jsx
    |   |   |   |   |   |-- TopicEventSecondItem
    |   |   |   |   |   |   `-- index.jsx
    |   |   |   |   |   `-- TopicEventSecondItems
    |   |   |   |   |       |-- TopicEventSecondItems.module.scss
    |   |   |   |   |       `-- index.jsx
    |   |   |   |   `-- index.jsx
    |   |   |   |-- TopicEventThird
    |   |   |   |   |-- components
    |   |   |   |   |   |-- TopicEventThirdHeader
    |   |   |   |   |   |   `-- index.jsx
    |   |   |   |   |   |-- TopicEventThirdItem
    |   |   |   |   |   |   `-- index.jsx
    |   |   |   |   |   `-- TopicEventThirdItems
    |   |   |   |   |       |-- TopicEventThirdItems.module.scss
    |   |   |   |   |       `-- index.jsx
    |   |   |   |   `-- index.jsx
    |   |   |   |-- WeeklyArtistHeader
    |   |   |   |   |-- WeeklyArtistHeader.stories.jsx
    |   |   |   |   `-- index.jsx
    |   |   |   |-- WeeklyArtistItem
    |   |   |   |   |-- WeeklyArtistItem.module.scss
    |   |   |   |   |-- WeeklyArtistItem.stories.jsx
    |   |   |   |   `-- index.jsx
    |   |   |   `-- WeeklyArtistItems
    |   |   |       |-- WeeklyArtistItems.module.scss
    |   |   |       |-- WeeklyArtistItems.stories.jsx
    |   |   |       `-- index.jsx
    |   |   `-- index.jsx
    |   `-- RightBox
    |       |-- HotTopic
    |       |   |-- HotTopics.module.scss
    |       |   |-- HotTopics.stories.jsx
    |       |   `-- index.jsx
    |       |-- PlayNow
    |       |   |-- PlayNow.module.scss
    |       |   |-- assets
    |       |   |   `-- play_now.png
    |       |   `-- index.jsx
    |       |-- RightBox.stories.jsx
    |       |-- TopSong
    |       |   |-- TopSong.module.scss
    |       |   |-- TopSong.stories.jsx
    |       |   `-- index.jsx
    |       |-- TopVideo
    |       |   |-- TopVideo.module.scss
    |       |   |-- TopVideo.stories.jsx
    |       |   `-- index.jsx
    |       |-- components
    |       |   |-- HotTopicHeader
    |       |   |   |-- HotTopicHeader.stories.jsx
    |       |   |   `-- index.jsx
    |       |   |-- HotTopicItem
    |       |   |   |-- HotTopicItem.module.scss
    |       |   |   |-- HotTopicItem.stories.jsx
    |       |   |   `-- index.jsx
    |       |   |-- HotTopicItems
    |       |   |   |-- HotTopicsItems.stories.jsx
    |       |   |   `-- index.jsx
    |       |   |-- SongItem
    |       |   |   |-- SongItem.module.scss
    |       |   |   |-- SongItem.stories.jsx
    |       |   |   `-- index.jsx
    |       |   |-- TopHeader
    |       |   |   |-- TopHeader.module.scss
    |       |   |   `-- index.jsx
    |       |   |-- TopSongFirstItem
    |       |   |   |-- TopSongFirstItem.stories.jsx
    |       |   |   `-- index.jsx
    |       |   |-- TopSongHeader
    |       |   |   |-- TopSongHeader.stories.jsx
    |       |   |   `-- index.jsx
    |       |   |-- TopSongImage
    |       |   |   |-- TopSongImage.stories.jsx
    |       |   |   `-- index.jsx
    |       |   |-- TopSongItem
    |       |   |   |-- TopSongItem.stories.jsx
    |       |   |   `-- index.jsx
    |       |   |-- TopSongItems
    |       |   |   |-- TopSongItems.module.scss
    |       |   |   |-- TopSongItems.stories.jsx
    |       |   |   `-- index.jsx
    |       |   |-- TopSongNav
    |       |   |   |-- TopSongNav.module.scss
    |       |   |   `-- index.jsx
    |       |   |-- TopVideoFirstItem
    |       |   |   |-- TopVideoFirstItem.stories.jsx
    |       |   |   `-- index.jsx
    |       |   |-- TopVideoHeader
    |       |   |   |-- TopMVHeader.stories.jsx
    |       |   |   `-- index.jsx
    |       |   |-- TopVideoImage
    |       |   |   |-- TopMVImage.stories.jsx
    |       |   |   `-- index.jsx
    |       |   |-- TopVideoItem
    |       |   |   |-- TopMVItem.stories.jsx
    |       |   |   `-- index.jsx
    |       |   |-- TopVideoItems
    |       |   |   |-- TopVideoItems.module.scss
    |       |   |   |-- TopVideoItems.stories.jsx
    |       |   |   `-- index.jsx
    |       |   |-- TopVideoNav
    |       |   |   |-- TopVideoNav.module.scss
    |       |   |   `-- index.jsx
    |       |   `-- VideoItem
    |       |       |-- VideoItem.module.scss
    |       |       |-- VideoItem.stories.jsx
    |       |       `-- index.jsx
    |       `-- index.jsx
    |-- mocks
    |   |-- carousel
    |   |   `-- index.js
    |   |-- cooper
    |   |   `-- index.js
    |   |-- hot-album
    |   |   `-- index.js
    |   |-- hot-song
    |   |   `-- index.js
    |   |-- hot-topic
    |   |   `-- index.js
    |   |-- hot-video
    |   |   `-- index.js
    |   |-- top-song
    |   |   |-- american.js
    |   |   |-- index.js
    |   |   |-- korean.js
    |   |   `-- vietnamese.js
    |   |-- top-video
    |   |   |-- american.js
    |   |   |-- index.js
    |   |   |-- korean.js
    |   |   `-- vietnamese.js
    |   |-- topic-event
    |   |   |-- first-items
    |   |   |   `-- index.js
    |   |   |-- four-items
    |   |   |   `-- index.js
    |   |   |-- second-items
    |   |   |   `-- index.js
    |   |   `-- third-items
    |   |       `-- index.js
    |   `-- weekly-artist
    |       `-- index.js
    |-- pages
    |   |-- 404.jsx
    |   |-- 500.jsx
    |   |-- [slug]
    |   |   `-- index.jsx
    |   |-- _app.jsx
    |   |-- _document.jsx
    |   |-- api
    |   |   `-- search-song.js
    |   |-- index.jsx
    |   `-- setting
    |       `-- index.jsx
    |-- reducers
    |   |-- carousel.js
    |   |-- cooper.js
    |   |-- hot-album.js
    |   |-- hot-song.js
    |   |-- hot-topic.js
    |   |-- hot-video.js
    |   |-- index.js
    |   |-- top-song.js
    |   |-- top-video.js
    |   |-- topic-event
    |   |   |-- first-items.js
    |   |   |-- four-items.js
    |   |   |-- second-items.js
    |   |   `-- third-items.js
    |   `-- weekly-artist.js
    |-- services
    |   `-- index.js
    |-- stores
    |   `-- index.js
    |-- styles
    |   |-- index.scss
    |   `-- normalize.scss
    |-- thunk
    |   `-- index.js
    `-- views
        |-- HomeScreen
        |   |-- HomeScreen.stories.jsx
        |   `-- index.jsx
        `-- SettingScreen
            |-- SettingScreen.stories.jsx
            `-- index.jsx
```
