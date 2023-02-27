window.BENCHMARK_DATA = {
  "lastUpdate": 1677497099955,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "omrif@diagnosticrobotics.com",
            "name": "Omri Fima"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "b1b947aa80c3af06762b1a505cf9cdf31a4e8b96",
          "message": "feat(snowflake): add support for alias in snowflake",
          "timestamp": "2023-02-27T06:19:54-05:00",
          "tree_id": "b99e0c2c31b62f438ec95f5e69b39493f034a242",
          "url": "https://github.com/ibis-project/ibis/commit/b1b947aa80c3af06762b1a505cf9cdf31a4e8b96"
        },
        "date": 1677497023980,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.2151240211647,
            "unit": "iter/sec",
            "range": "stddev: 0.0010957457889740287",
            "extra": "mean: 26.16765025925782 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4035.6073944101936,
            "unit": "iter/sec",
            "range": "stddev: 0.00004992987257808574",
            "extra": "mean: 247.7941737804132 usec\nrounds: 328"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 595.9098307746187,
            "unit": "iter/sec",
            "range": "stddev: 0.000047082869939188856",
            "extra": "mean: 1.6781062307700267 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 52.80174228852838,
            "unit": "iter/sec",
            "range": "stddev: 0.0004290546713274511",
            "extra": "mean: 18.938769000000562 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1645725.849710915,
            "unit": "iter/sec",
            "range": "stddev: 1.835189369678797e-7",
            "extra": "mean: 607.6346192020125 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1436.812008422553,
            "unit": "iter/sec",
            "range": "stddev: 0.000017372254360682083",
            "extra": "mean: 695.985274439542 usec\nrounds: 1115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2723.8189022168,
            "unit": "iter/sec",
            "range": "stddev: 0.002772708065712101",
            "extra": "mean: 367.1316030541321 usec\nrounds: 655"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 271.7157111576462,
            "unit": "iter/sec",
            "range": "stddev: 0.00005989565938882563",
            "extra": "mean: 3.6803171805542454 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4016.406734621634,
            "unit": "iter/sec",
            "range": "stddev: 0.00002253674576152809",
            "extra": "mean: 248.97876785733584 usec\nrounds: 1400"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4126.270177923867,
            "unit": "iter/sec",
            "range": "stddev: 0.00004873340998075398",
            "extra": "mean: 242.34961766443274 usec\nrounds: 1721"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.50609382992101,
            "unit": "iter/sec",
            "range": "stddev: 0.0004002169917282678",
            "extra": "mean: 24.687643399999256 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 427.55934626484026,
            "unit": "iter/sec",
            "range": "stddev: 0.000053499852102182736",
            "extra": "mean: 2.3388566025652415 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 110.95715687552268,
            "unit": "iter/sec",
            "range": "stddev: 0.00060795329986504",
            "extra": "mean: 9.01248759574698 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 80.29120293770896,
            "unit": "iter/sec",
            "range": "stddev: 0.0152734790293825",
            "extra": "mean: 12.45466456363612 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.163624950396693,
            "unit": "iter/sec",
            "range": "stddev: 0.004123709318678883",
            "extra": "mean: 462.1873120000089 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.8801786428042995,
            "unit": "iter/sec",
            "range": "stddev: 0.0001637361633233797",
            "extra": "mean: 204.91053160000092 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10722.53943452243,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024320822906968886",
            "extra": "mean: 93.26148960388866 usec\nrounds: 5531"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 111.36939559018776,
            "unit": "iter/sec",
            "range": "stddev: 0.0006426795970241941",
            "extra": "mean: 8.979127476634211 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.997714382596785,
            "unit": "iter/sec",
            "range": "stddev: 0.000714260286318721",
            "extra": "mean: 111.13933577778174 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 595081.397059815,
            "unit": "iter/sec",
            "range": "stddev: 1.629721425799397e-7",
            "extra": "mean: 1.6804423813965812 usec\nrounds: 22727"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 63.505186498390145,
            "unit": "iter/sec",
            "range": "stddev: 0.00018639036515898777",
            "extra": "mean: 15.74674534693871 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 87.65436990726802,
            "unit": "iter/sec",
            "range": "stddev: 0.00004559604958397404",
            "extra": "mean: 11.40844433720678 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 191.8245600586274,
            "unit": "iter/sec",
            "range": "stddev: 0.00895682477705201",
            "extra": "mean: 5.213096798941541 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 155.1388157586234,
            "unit": "iter/sec",
            "range": "stddev: 0.00011243319582462436",
            "extra": "mean: 6.445840102040453 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1388875.66684313,
            "unit": "iter/sec",
            "range": "stddev: 2.162433598243901e-7",
            "extra": "mean: 720.0068543737742 nsec\nrounds: 156251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 255.71917252025125,
            "unit": "iter/sec",
            "range": "stddev: 0.0002366548644662706",
            "extra": "mean: 3.910539793103729 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 87.59502369594009,
            "unit": "iter/sec",
            "range": "stddev: 0.0005768330991622266",
            "extra": "mean: 11.416173634146167 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7261124771622511,
            "unit": "iter/sec",
            "range": "stddev: 0.006357558917449958",
            "extra": "mean: 1.3771971029999919 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 82.13838566957274,
            "unit": "iter/sec",
            "range": "stddev: 0.0007905580105854765",
            "extra": "mean: 12.174575770490689 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 83.87291185931879,
            "unit": "iter/sec",
            "range": "stddev: 0.00070386924360605",
            "extra": "mean: 11.922800554216051 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.312215264113973,
            "unit": "iter/sec",
            "range": "stddev: 0.00028544836681517",
            "extra": "mean: 41.131587111111564 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5519726.516873757,
            "unit": "iter/sec",
            "range": "stddev: 4.5822872197218005e-9",
            "extra": "mean: 181.16839610495344 nsec\nrounds: 54642"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4119.278560513001,
            "unit": "iter/sec",
            "range": "stddev: 0.00004997196716455466",
            "extra": "mean: 242.76095566488308 usec\nrounds: 1827"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 249.3315732186797,
            "unit": "iter/sec",
            "range": "stddev: 0.0002875258919726698",
            "extra": "mean: 4.010723499999481 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 954.302113405503,
            "unit": "iter/sec",
            "range": "stddev: 0.00001202825887138613",
            "extra": "mean: 1.0478861840003901 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 105.43354132650343,
            "unit": "iter/sec",
            "range": "stddev: 0.0006946746185826702",
            "extra": "mean: 9.484647745096884 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6464.658613937356,
            "unit": "iter/sec",
            "range": "stddev: 0.00001461682600204007",
            "extra": "mean: 154.68720928960877 usec\nrounds: 3703"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 95.95142740858003,
            "unit": "iter/sec",
            "range": "stddev: 0.014656579789642942",
            "extra": "mean: 10.421939798162706 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 110.08296690362407,
            "unit": "iter/sec",
            "range": "stddev: 0.0006955952947247108",
            "extra": "mean: 9.084057489797532 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 249.84240312873223,
            "unit": "iter/sec",
            "range": "stddev: 0.00022702184068760912",
            "extra": "mean: 4.002523140496477 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3530.788692379775,
            "unit": "iter/sec",
            "range": "stddev: 0.00005467144324549471",
            "extra": "mean: 283.2228397463212 usec\nrounds: 2521"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3553.6008523573855,
            "unit": "iter/sec",
            "range": "stddev: 0.00004454363874514199",
            "extra": "mean: 281.4047051279326 usec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3696.8921822386765,
            "unit": "iter/sec",
            "range": "stddev: 0.000051982207411986015",
            "extra": "mean: 270.4974748261238 usec\nrounds: 2582"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 32.45112260589933,
            "unit": "iter/sec",
            "range": "stddev: 0.0007884299352393226",
            "extra": "mean: 30.81557492307551 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 29.48870923745707,
            "unit": "iter/sec",
            "range": "stddev: 0.03061651262336146",
            "extra": "mean: 33.91128421212085 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1345071.1601391642,
            "unit": "iter/sec",
            "range": "stddev: 1.2534229986336966e-7",
            "extra": "mean: 743.4550896894835 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10579.640585883475,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033167798337739236",
            "extra": "mean: 94.52116939911083 usec\nrounds: 2196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 106.28236283257029,
            "unit": "iter/sec",
            "range": "stddev: 0.00007553660164877024",
            "extra": "mean: 9.408898836539127 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 92.41538567315745,
            "unit": "iter/sec",
            "range": "stddev: 0.00023710710138169838",
            "extra": "mean: 10.820709048779694 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4149237.96640741,
            "unit": "iter/sec",
            "range": "stddev: 2.6249688720923436e-8",
            "extra": "mean: 241.00810994646608 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.329252285400294,
            "unit": "iter/sec",
            "range": "stddev: 0.00057129853700346",
            "extra": "mean: 75.02296292308259 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 84.36056449283723,
            "unit": "iter/sec",
            "range": "stddev: 0.0007842871939241787",
            "extra": "mean: 11.85387990243838 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 75.36368351051667,
            "unit": "iter/sec",
            "range": "stddev: 0.0007542040379685956",
            "extra": "mean: 13.268990492754437 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.13478425941066652,
            "unit": "iter/sec",
            "range": "stddev: 0.07722102963612032",
            "extra": "mean: 7.419263973199992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11111585.78546046,
            "unit": "iter/sec",
            "range": "stddev: 4.015063039163615e-9",
            "extra": "mean: 89.99615530208122 nsec\nrounds: 113624"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 131.996239355163,
            "unit": "iter/sec",
            "range": "stddev: 0.00005225554470017523",
            "extra": "mean: 7.575973413221982 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 102.71084978798018,
            "unit": "iter/sec",
            "range": "stddev: 0.0006983230284008959",
            "extra": "mean: 9.736069773195721 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 111.12784168209319,
            "unit": "iter/sec",
            "range": "stddev: 0.0007840203024570806",
            "extra": "mean: 8.998645027775584 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 246.92670204670122,
            "unit": "iter/sec",
            "range": "stddev: 0.0002405145210011419",
            "extra": "mean: 4.049784781116422 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 166.9314733087173,
            "unit": "iter/sec",
            "range": "stddev: 0.000034687923613427915",
            "extra": "mean: 5.99048208333149 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 56314.92762191268,
            "unit": "iter/sec",
            "range": "stddev: 6.141787044398573e-7",
            "extra": "mean: 17.757281101625537 usec\nrounds: 13038"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5749176351206524,
            "unit": "iter/sec",
            "range": "stddev: 0.0069094753309771806",
            "extra": "mean: 1.739379589200007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 241.880445222961,
            "unit": "iter/sec",
            "range": "stddev: 0.00020417253823157088",
            "extra": "mean: 4.1342738520189934 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 121304.20819190254,
            "unit": "iter/sec",
            "range": "stddev: 3.929886363863703e-7",
            "extra": "mean: 8.243737087983014 usec\nrounds: 35335"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.56902355696799,
            "unit": "iter/sec",
            "range": "stddev: 0.00008687749030849669",
            "extra": "mean: 14.799681086953875 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2061105.1864158534,
            "unit": "iter/sec",
            "range": "stddev: 2.3634402405774307e-8",
            "extra": "mean: 485.17659680371935 nsec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 84.95686688448174,
            "unit": "iter/sec",
            "range": "stddev: 0.0008545509335227707",
            "extra": "mean: 11.770678894735235 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8393501694181087,
            "unit": "iter/sec",
            "range": "stddev: 0.013382926905242098",
            "extra": "mean: 1.1913978652000083 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 382095.3834097592,
            "unit": "iter/sec",
            "range": "stddev: 3.770979111634279e-7",
            "extra": "mean: 2.6171475590104154 usec\nrounds: 1884"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8426258059464262,
            "unit": "iter/sec",
            "range": "stddev: 0.00523281486446687",
            "extra": "mean: 1.1867664068000068 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4432915.026357569,
            "unit": "iter/sec",
            "range": "stddev: 2.4932933376334625e-8",
            "extra": "mean: 225.5851948560596 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9167.806390191015,
            "unit": "iter/sec",
            "range": "stddev: 0.00005017177692999084",
            "extra": "mean: 109.0773471252554 usec\nrounds: 3287"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.543756542175876,
            "unit": "iter/sec",
            "range": "stddev: 0.0018204190630799026",
            "extra": "mean: 647.7705341999922 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 79.21981006254165,
            "unit": "iter/sec",
            "range": "stddev: 0.0003335154250003693",
            "extra": "mean: 12.623105246156614 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 244.21352067047033,
            "unit": "iter/sec",
            "range": "stddev: 0.0002357378403313848",
            "extra": "mean: 4.094777378642154 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 267.2068259170385,
            "unit": "iter/sec",
            "range": "stddev: 0.00008278203325483451",
            "extra": "mean: 3.742419365852865 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 115.51558756363843,
            "unit": "iter/sec",
            "range": "stddev: 0.00012619246120401694",
            "extra": "mean: 8.656840354546024 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 542.8672132253117,
            "unit": "iter/sec",
            "range": "stddev: 0.0000311170179385956",
            "extra": "mean: 1.8420710914898444 msec\nrounds: 470"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 148.93442877145384,
            "unit": "iter/sec",
            "range": "stddev: 0.00008440958612245566",
            "extra": "mean: 6.714364222221191 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 54.398939731348655,
            "unit": "iter/sec",
            "range": "stddev: 0.0008215013702657223",
            "extra": "mean: 18.382711224493345 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 265.3470938696653,
            "unit": "iter/sec",
            "range": "stddev: 0.000012754098350094455",
            "extra": "mean: 3.7686487740136543 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 81.83169137204608,
            "unit": "iter/sec",
            "range": "stddev: 0.0007250114653501139",
            "extra": "mean: 12.220204461539488 msec\nrounds: 78"
          }
        ]
      }
    ]
  }
}