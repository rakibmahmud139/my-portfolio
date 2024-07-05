import { Router } from 'express';
import { ProjectRoutes } from '../modulers/projects/projectRoutes';
import { SkillRoutes } from '../modulers/skills/skillRoutes';
import { ExperienceRoutes } from '../modulers/experiences/experienceRoutes';
import { BlogRoutes } from '../modulers/blogs/blogRoutes';
import { AuthRoutes } from '../modulers/auth/authRoutes';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/projects',
    route: ProjectRoutes,
  },
  {
    path: '/skills',
    route: SkillRoutes,
  },
  {
    path: '/experiences',
    route: ExperienceRoutes,
  },
  {
    path: '/blogs',
    route: BlogRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
