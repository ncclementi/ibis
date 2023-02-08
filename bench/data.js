window.BENCHMARK_DATA = {
  "lastUpdate": 1675866111164,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "120908425+krzysztof-kwitt@users.noreply.github.com",
            "name": "Krzysztof Witt",
            "username": "krzysztof-kwitt"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "fd6ea5b408c702eb3df2ec1f9fe1865e409aa28a",
          "message": "chore: enable color output in pytest output",
          "timestamp": "2023-02-08T09:16:49-05:00",
          "tree_id": "5b2e9d153092c7de6bfa76dab9a1e18fab005b25",
          "url": "https://github.com/ibis-project/ibis/commit/fd6ea5b408c702eb3df2ec1f9fe1865e409aa28a"
        },
        "date": 1675866029028,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 275.3535661579778,
            "unit": "iter/sec",
            "range": "stddev: 0.00006516902967602555",
            "extra": "mean: 3.6316943846162966 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 87.9526406579468,
            "unit": "iter/sec",
            "range": "stddev: 0.005906878862219791",
            "extra": "mean: 11.369755274194222 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 122.36626336367634,
            "unit": "iter/sec",
            "range": "stddev: 0.008031883814036384",
            "extra": "mean: 8.172187108696527 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 138.70410035127304,
            "unit": "iter/sec",
            "range": "stddev: 0.00014457361180364746",
            "extra": "mean: 7.2095921999959955 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.5938833396638,
            "unit": "iter/sec",
            "range": "stddev: 0.0000865322779478369",
            "extra": "mean: 14.57855935999703 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 141.91216999035572,
            "unit": "iter/sec",
            "range": "stddev: 0.0003032847504290147",
            "extra": "mean: 7.046611999999434 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8649756667328882,
            "unit": "iter/sec",
            "range": "stddev: 0.0018925610917768026",
            "extra": "mean: 1.1561018864000119 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 158.60179564309146,
            "unit": "iter/sec",
            "range": "stddev: 0.0006249133673056212",
            "extra": "mean: 6.305098854305178 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 250.54957953156352,
            "unit": "iter/sec",
            "range": "stddev: 0.0002546499512808541",
            "extra": "mean: 3.9912260155041404 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5325055.75262484,
            "unit": "iter/sec",
            "range": "stddev: 6.435062833391682e-9",
            "extra": "mean: 187.7914610578876 nsec\nrounds: 36631"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 102.46390129576356,
            "unit": "iter/sec",
            "range": "stddev: 0.00011370757855030493",
            "extra": "mean: 9.759534698112708 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1440.9972666928295,
            "unit": "iter/sec",
            "range": "stddev: 0.000011422081608224744",
            "extra": "mean: 693.9638423430579 usec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 43.14732096353551,
            "unit": "iter/sec",
            "range": "stddev: 0.0002188470679399751",
            "extra": "mean: 23.176409975606962 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5672.14852200045,
            "unit": "iter/sec",
            "range": "stddev: 0.00005503672376729851",
            "extra": "mean: 176.300038005232 usec\nrounds: 421"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6070.939035094929,
            "unit": "iter/sec",
            "range": "stddev: 0.00004617140867247106",
            "extra": "mean: 164.7191635790102 usec\nrounds: 2213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 147.04316821363574,
            "unit": "iter/sec",
            "range": "stddev: 0.000701100290516732",
            "extra": "mean: 6.800723978873486 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 94.54406377362416,
            "unit": "iter/sec",
            "range": "stddev: 0.00011682175979353058",
            "extra": "mean: 10.577078666666953 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 237.0778940903494,
            "unit": "iter/sec",
            "range": "stddev: 0.0002220913256076217",
            "extra": "mean: 4.218022957547042 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5907377105403484,
            "unit": "iter/sec",
            "range": "stddev: 0.0009279870461991939",
            "extra": "mean: 628.6391486000014 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19373.334469794354,
            "unit": "iter/sec",
            "range": "stddev: 0.00001608742341121468",
            "extra": "mean: 51.6173403994617 usec\nrounds: 5708"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8642082164040293,
            "unit": "iter/sec",
            "range": "stddev: 0.003729128009874731",
            "extra": "mean: 1.157128549600003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 93.82876975777816,
            "unit": "iter/sec",
            "range": "stddev: 0.0006386979667663641",
            "extra": "mean: 10.657711942526058 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4584.63253851134,
            "unit": "iter/sec",
            "range": "stddev: 0.00021728123399146918",
            "extra": "mean: 218.11998924666418 usec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4578810.750462525,
            "unit": "iter/sec",
            "range": "stddev: 1.211306581533667e-8",
            "extra": "mean: 218.3973207232799 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.41694468815818,
            "unit": "iter/sec",
            "range": "stddev: 0.050587657818151915",
            "extra": "mean: 226.4008428000011 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 417.51565329088595,
            "unit": "iter/sec",
            "range": "stddev: 0.000027410147303586263",
            "extra": "mean: 2.3951197808224287 msec\nrounds: 365"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2005018.8755804887,
            "unit": "iter/sec",
            "range": "stddev: 2.603482606767541e-8",
            "extra": "mean: 498.7484218623661 nsec\nrounds: 95239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1484715.212624507,
            "unit": "iter/sec",
            "range": "stddev: 1.1462044636850782e-7",
            "extra": "mean: 673.5298402663472 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 89.50859361038589,
            "unit": "iter/sec",
            "range": "stddev: 0.000707679034032355",
            "extra": "mean: 11.172111633803704 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 324.43650246053534,
            "unit": "iter/sec",
            "range": "stddev: 0.00003615481892664087",
            "extra": "mean: 3.082267230770806 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.262334648256802,
            "unit": "iter/sec",
            "range": "stddev: 0.0014373337346104977",
            "extra": "mean: 442.0212548000052 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11028.695887791382,
            "unit": "iter/sec",
            "range": "stddev: 0.000001899018059238666",
            "extra": "mean: 90.67255187505772 usec\nrounds: 5253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5862418514647026,
            "unit": "iter/sec",
            "range": "stddev: 0.0003957448727608984",
            "extra": "mean: 1.7057806389999939 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7550733520477901,
            "unit": "iter/sec",
            "range": "stddev: 0.004044971402043312",
            "extra": "mean: 1.3243746415999964 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.50330599500909,
            "unit": "iter/sec",
            "range": "stddev: 0.0006538885624193765",
            "extra": "mean: 22.986758756098325 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10372.538147787714,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017358772720932163",
            "extra": "mean: 96.40841862927088 usec\nrounds: 4756"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 392766.5177057781,
            "unit": "iter/sec",
            "range": "stddev: 2.171625013942181e-7",
            "extra": "mean: 2.546041872003716 usec\nrounds: 2030"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5073.011985689728,
            "unit": "iter/sec",
            "range": "stddev: 0.00004863275706579279",
            "extra": "mean: 197.12155280154334 usec\nrounds: 1856"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 622.0830186594254,
            "unit": "iter/sec",
            "range": "stddev: 0.000023518046040128135",
            "extra": "mean: 1.6075024876180946 msec\nrounds: 525"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 144.4759644637133,
            "unit": "iter/sec",
            "range": "stddev: 0.00009613827699290356",
            "extra": "mean: 6.921566529851136 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9806.921347323889,
            "unit": "iter/sec",
            "range": "stddev: 0.000013435594638073035",
            "extra": "mean: 101.9687998489842 usec\nrounds: 5306"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4509.2779391023505,
            "unit": "iter/sec",
            "range": "stddev: 0.00002024444960293746",
            "extra": "mean: 221.76499508457164 usec\nrounds: 1424"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4352674.853005965,
            "unit": "iter/sec",
            "range": "stddev: 1.2732420800060834e-8",
            "extra": "mean: 229.743786010413 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 56475.029302324976,
            "unit": "iter/sec",
            "range": "stddev: 0.000012137440715940353",
            "extra": "mean: 17.706940790535043 usec\nrounds: 11738"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.66933674935673,
            "unit": "iter/sec",
            "range": "stddev: 0.0001891797929501123",
            "extra": "mean: 11.277855870589384 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 157.5074598809981,
            "unit": "iter/sec",
            "range": "stddev: 0.0006651451419255588",
            "extra": "mean: 6.34890563758397 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 983.2857128339235,
            "unit": "iter/sec",
            "range": "stddev: 0.00013224177467987034",
            "extra": "mean: 1.0169984033612207 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 29.970839582624585,
            "unit": "iter/sec",
            "range": "stddev: 0.02591178808166219",
            "extra": "mean: 33.36576532142743 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 567884.0848515532,
            "unit": "iter/sec",
            "range": "stddev: 5.670233845940387e-7",
            "extra": "mean: 1.7609227422906268 usec\nrounds: 20244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.357325284987983,
            "unit": "iter/sec",
            "range": "stddev: 0.0005715490706495082",
            "extra": "mean: 39.43633599999677 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 87.03976896330613,
            "unit": "iter/sec",
            "range": "stddev: 0.0007051193971369959",
            "extra": "mean: 11.489001084338538 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 171.05867639577284,
            "unit": "iter/sec",
            "range": "stddev: 0.000035343490065720755",
            "extra": "mean: 5.845947256638025 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 82.30218418952249,
            "unit": "iter/sec",
            "range": "stddev: 0.000634117717516066",
            "extra": "mean: 12.1503458243251 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 253.14425735599391,
            "unit": "iter/sec",
            "range": "stddev: 0.00022243306886879117",
            "extra": "mean: 3.950316750001211 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5183.857998985542,
            "unit": "iter/sec",
            "range": "stddev: 0.000051063969286331234",
            "extra": "mean: 192.90651869624816 usec\nrounds: 3129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15240291313330537,
            "unit": "iter/sec",
            "range": "stddev: 0.06411979179924658",
            "extra": "mean: 6.561554365600017 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 97.73673587044375,
            "unit": "iter/sec",
            "range": "stddev: 0.00013874520547280691",
            "extra": "mean: 10.231567394736443 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.53105180955129,
            "unit": "iter/sec",
            "range": "stddev: 0.00038321133104756154",
            "extra": "mean: 18.00794271697913 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 160.2085027793479,
            "unit": "iter/sec",
            "range": "stddev: 0.0007094880231822214",
            "extra": "mean: 6.241865959993902 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 245.76489972022696,
            "unit": "iter/sec",
            "range": "stddev: 0.00023018989244022716",
            "extra": "mean: 4.068929294371884 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 250.27666413097128,
            "unit": "iter/sec",
            "range": "stddev: 0.00019927191010967629",
            "extra": "mean: 3.9955782672438604 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 158.5323241182794,
            "unit": "iter/sec",
            "range": "stddev: 0.0006858700571158772",
            "extra": "mean: 6.307861854431087 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.94539799723564,
            "unit": "iter/sec",
            "range": "stddev: 0.0007370773734728729",
            "extra": "mean: 11.370691619718778 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 160.4311093324918,
            "unit": "iter/sec",
            "range": "stddev: 0.0006996521082895233",
            "extra": "mean: 6.233205044587148 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1563967.8189144018,
            "unit": "iter/sec",
            "range": "stddev: 1.7912593042404078e-7",
            "extra": "mean: 639.3993456298422 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 240.4716503585406,
            "unit": "iter/sec",
            "range": "stddev: 0.00032178559153895605",
            "extra": "mean: 4.15849435269817 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1518659.6989191251,
            "unit": "iter/sec",
            "range": "stddev: 1.1461708891945027e-7",
            "extra": "mean: 658.4753652919936 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11285016.266805945,
            "unit": "iter/sec",
            "range": "stddev: 3.753619883778007e-9",
            "extra": "mean: 88.61307563571413 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 119208.46552099695,
            "unit": "iter/sec",
            "range": "stddev: 3.6644689357916355e-7",
            "extra": "mean: 8.388665986341914 usec\nrounds: 31849"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 264.8280495263816,
            "unit": "iter/sec",
            "range": "stddev: 0.000013540701754782362",
            "extra": "mean: 3.77603506044167 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 247.75825628378715,
            "unit": "iter/sec",
            "range": "stddev: 0.0002402050234389595",
            "extra": "mean: 4.0361924361244315 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 220.76752789988439,
            "unit": "iter/sec",
            "range": "stddev: 0.0004065345481606418",
            "extra": "mean: 4.529651663506821 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 71.32137095046824,
            "unit": "iter/sec",
            "range": "stddev: 0.00022425402686196142",
            "extra": "mean: 14.021042874995869 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 518.8237518437072,
            "unit": "iter/sec",
            "range": "stddev: 0.00002336859890698658",
            "extra": "mean: 1.9274368153855155 msec\nrounds: 455"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5941.906859037406,
            "unit": "iter/sec",
            "range": "stddev: 0.00004863516274834087",
            "extra": "mean: 168.29614191596414 usec\nrounds: 2579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 122.50823249250138,
            "unit": "iter/sec",
            "range": "stddev: 0.00032353214438583626",
            "extra": "mean: 8.16271673874006 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.666834099778256,
            "unit": "iter/sec",
            "range": "stddev: 0.029483067616422727",
            "extra": "mean: 31.578780399995917 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.143842052732374,
            "unit": "iter/sec",
            "range": "stddev: 0.00018456544849840628",
            "extra": "mean: 109.36321890000045 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.46787640066598,
            "unit": "iter/sec",
            "range": "stddev: 0.00043678388935623064",
            "extra": "mean: 16.008227870370487 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.649272790631125,
            "unit": "iter/sec",
            "range": "stddev: 0.0003855185212070467",
            "extra": "mean: 73.26397642857582 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 6001.028189843532,
            "unit": "iter/sec",
            "range": "stddev: 0.00004545134443485843",
            "extra": "mean: 166.6381107311668 usec\nrounds: 2339"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 91.42467583504768,
            "unit": "iter/sec",
            "range": "stddev: 0.0007060043687112077",
            "extra": "mean: 10.93796604544973 msec\nrounds: 88"
          }
        ]
      }
    ]
  }
}