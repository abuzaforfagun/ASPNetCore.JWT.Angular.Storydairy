using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using StoryDairy.Core.Presistance;
using StoryDairy.Core.Ripository;
using Swashbuckle.AspNetCore.Swagger;

namespace StoryDairy
{
    public class Startup
    {

        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddDbContext<StoryDbContext>(
                    options => options
                    .UseSqlServer(Configuration.GetConnectionString("StoryDb"))
                );
            services.AddScoped<IStoryRepository, StoryRepository>();
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            
            services.AddSwaggerGen(options =>
            {
                options.AddSecurityDefinition("Bearer", new ApiKeyScheme { In = "header", Description = "Please enter JWT with Bearer into field", Name = "Authorization", Type = "apiKey" });
                options.AddSecurityRequirement(new Dictionary<string, IEnumerable<string>> {
                    { "Bearer", Enumerable.Empty<string>() },
                });
                options.SwaggerDoc("v1", new Info { Title = "Config API", Version = "v1" });
                
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("../swagger/v1/swagger.json", "Story Dairy API V1");
            });
            app.UseDefaultFiles(new DefaultFilesOptions
            {
                DefaultFileNames = new
                    List<string> { "swagger/index.html" }
            });
            app.UseMvc();

            app.Run(context =>
            {
                context.Response.Redirect("swagger/");
                return Task.CompletedTask;
            });

        }
    }
}
