using System;
using System.Collections.Generic;
using System.Text;

namespace StoryDairy.Core
{
    public static class Extensions
    {
        public static bool IsNull(this object obj)
        {
            if (obj == null)
                return true;
            return false;
        }
    }
}
