const a_diff = [
  {
    old_path: "/course_v2/detail/:contentId/course_content_video_frame",
    new_path: "/course_v2/detail/:courseId/:contentId/course_content_video_frame",
    name: "视频打点",
  },
  {
    old_path: "/course_v2/detail/:contentId/course_content_learn_material",
    new_path: "/course_v2/detail/:courseId/:contentId/course_content_learn_material",
    name: "学习资料",
  },
  {
    old_path: "/course_v2/content/:contentId/remind",
    new_path: "/course_v2/detail/:courseId/content/:contentId/remind",
    name: "上课提醒",
  },
  {
    old_path: "/course_v2/content/:contentId/remind/create",
    new_path: "/course_v2/detail/:courseId/content/:contentId/remind/create",
    name: "新建上课提醒",
  },
  {
    old_path: "/course_v2/content/:contentId/remind/edit/:remindId",
    new_path: "/course_v2/detail/:courseId/content/:contentId/remind/edit/:remindId",
    name: "编辑上课提醒",
  },
  {
    old_path: "/course_v2/content/:contentId",
    new_path: "/course_v2/detail/:courseId/content/:contentId",
    name: "管理内容",
  },
  {
    old_path: "/course_v2/content/:contentId/new_live_practice/nuwa_homework/create_new_homework",
    new_path:
      "/course_v2/detail/:courseId/content/:contentId/new_live_practice/nuwa_homework/create_new_homework",
    name: "新建实操作业",
  },
  {
    old_path:
      "/course_v2/content/:contentId/new_live_practice/live_practive_homework/:homeworkId/edit",
    new_path:
      "/course_v2/detail/:courseId/content/:contentId/new_live_practice/live_practive_homework/:homeworkId/edit",
    name: "编辑实操作业",
  },
  {
    old_path: "/course_v2/content/:contentId/homework/:homeworkId/create",
    new_path: "/course_v2/detail/:courseId/content/:contentId/homework/:homeworkId/create",
    name: "新建作业",
  },
  {
    old_path: "/course_v2/content/:contentId/homework/:homeworkId/edit",
    new_path: "/course_v2/detail/:courseId/content/:contentId/homework/:homeworkId/edit",
    name: "编辑作业",
  },
  {
    old_path: "/course_v2/detail/:contentId/course_content_video_homework",
    new_path: "/course_v2/detail/:courseId/:contentId/course_content_video_homework",
    name: "作业管理",
  },
  {
    old_path: "/course_v2/detail/:contentId/course_content_video_homework/create",
    new_path: "/course_v2/detail/:courseId/:contentId/course_content_video_homework/create",
    name: "新建作业",
  },
  {
    old_path: "/course_v2/detail/:contentId/course_content_video_homework/edit/:homeworkId",
    new_path:
      "/course_v2/detail/:courseId/:contentId/course_content_video_homework/edit/:homeworkId",
    name: "编辑作业",
  },
];

const a_del = [
  { name: "目录设置", path: "/course_v2/directory/:courseId" },
  { name: "目录详情", path: "/course_v2/directory/detail/:courseId" },
  { name: "新建内容", path: "/course_v2/:courseId/content/create" },
  { name: "编辑内容", path: "/course_v2/:courseId/content/:contendId" },
  {
    name: "交互式指引",
    path: "/course_v2/content/:contentId/video/:videoId/nuwa_homework/:workId/step",
  },
  { name: "新建作业", path: "/course_v2/content/:contentId/new_live_practice/homework/create" },
  {
    name: "编辑作业",
    path: "/course_v2/content/:contentId/new_live_practice/homework/:homeworkId/edit",
  },
];
