window.BENCHMARK_DATA = {
  "lastUpdate": 1678901523202,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "f84a54da3629da0b602ecf081db6a0ba07aa6192",
          "message": "fix: support negative string indices",
          "timestamp": "2023-03-15T13:26:27-04:00",
          "tree_id": "d876b81a42e071a05a124b07f3f3364252ef004f",
          "url": "https://github.com/ibis-project/ibis/commit/f84a54da3629da0b602ecf081db6a0ba07aa6192"
        },
        "date": 1678901444996,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 678.5404379905118,
            "unit": "iter/sec",
            "range": "stddev: 0.00004887639323127025",
            "extra": "mean: 1.4737515172441105 msec\nrounds: 319"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1790.7451199102816,
            "unit": "iter/sec",
            "range": "stddev: 0.000008241304957127697",
            "extra": "mean: 558.426762626108 usec\nrounds: 1386"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.677107746818389,
            "unit": "iter/sec",
            "range": "stddev: 0.00019383281393770829",
            "extra": "mean: 176.146031500006 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2606111.9159730254,
            "unit": "iter/sec",
            "range": "stddev: 1.6953706176671144e-8",
            "extra": "mean: 383.7133754199681 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 101.97113736490888,
            "unit": "iter/sec",
            "range": "stddev: 0.010577577209732918",
            "extra": "mean: 9.806696540232254 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4646.798371060012,
            "unit": "iter/sec",
            "range": "stddev: 0.00013997365355738296",
            "extra": "mean: 215.2019347832997 usec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12166.775600417828,
            "unit": "iter/sec",
            "range": "stddev: 0.00001244616023112926",
            "extra": "mean: 82.19104492776691 usec\nrounds: 5698"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 306.2603148582201,
            "unit": "iter/sec",
            "range": "stddev: 0.00018683291307323985",
            "extra": "mean: 3.26519614682346 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 154.56195164527168,
            "unit": "iter/sec",
            "range": "stddev: 0.00021903608309955952",
            "extra": "mean: 6.469897599993146 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 309.0908022739751,
            "unit": "iter/sec",
            "range": "stddev: 0.0001981306344050247",
            "extra": "mean: 3.2352952357139686 msec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.8391264525245,
            "unit": "iter/sec",
            "range": "stddev: 0.0005985544341686337",
            "extra": "mean: 10.544171350002784 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.641208579005756,
            "unit": "iter/sec",
            "range": "stddev: 0.00046143992404796435",
            "extra": "mean: 17.65499051110737 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 809602.975212926,
            "unit": "iter/sec",
            "range": "stddev: 4.090611850388098e-7",
            "extra": "mean: 1.2351733264530054 usec\nrounds: 25126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 504241.2879701032,
            "unit": "iter/sec",
            "range": "stddev: 3.1985420578395636e-7",
            "extra": "mean: 1.983177545864294 usec\nrounds: 2298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.91510928148628,
            "unit": "iter/sec",
            "range": "stddev: 0.00004840211399123621",
            "extra": "mean: 6.063725782051567 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 121.04508255509026,
            "unit": "iter/sec",
            "range": "stddev: 0.00005818797681298926",
            "extra": "mean: 8.26138475757475 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.67023534660096,
            "unit": "iter/sec",
            "range": "stddev: 0.0001572348618547673",
            "extra": "mean: 9.835720322579464 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12688.517142009405,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015538906158022306",
            "extra": "mean: 78.81141577128656 usec\nrounds: 5212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 750.8260350921206,
            "unit": "iter/sec",
            "range": "stddev: 0.0000225406680854852",
            "extra": "mean: 1.3318664421077349 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.64558794538922,
            "unit": "iter/sec",
            "range": "stddev: 0.000626558466412701",
            "extra": "mean: 9.46561062745871 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.85621587510019,
            "unit": "iter/sec",
            "range": "stddev: 0.0005832046470305069",
            "extra": "mean: 8.274295142861812 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1723386.7311730788,
            "unit": "iter/sec",
            "range": "stddev: 1.3109800951333225e-7",
            "extra": "mean: 580.2528137833101 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 119.26623108717966,
            "unit": "iter/sec",
            "range": "stddev: 0.000773332626063548",
            "extra": "mean: 8.384603008617193 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8299878444744415,
            "unit": "iter/sec",
            "range": "stddev: 0.0034052827306976503",
            "extra": "mean: 1.204836922200002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 105.75773206530725,
            "unit": "iter/sec",
            "range": "stddev: 0.012081602109746457",
            "extra": "mean: 9.455573417388361 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 107.53541881029294,
            "unit": "iter/sec",
            "range": "stddev: 0.0006736004371214203",
            "extra": "mean: 9.29926168571618 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.843395845598,
            "unit": "iter/sec",
            "range": "stddev: 0.00007602617528390696",
            "extra": "mean: 13.361232326536882 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.588525486583864,
            "unit": "iter/sec",
            "range": "stddev: 0.004147097739326759",
            "extra": "mean: 386.32032220000383 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 316.4663215141395,
            "unit": "iter/sec",
            "range": "stddev: 0.00020281946403095596",
            "extra": "mean: 3.1598939034507048 msec\nrounds: 290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 299.6469344244409,
            "unit": "iter/sec",
            "range": "stddev: 0.00021483110429382116",
            "extra": "mean: 3.337260906475786 msec\nrounds: 278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 309.20226506958085,
            "unit": "iter/sec",
            "range": "stddev: 0.0002489485982926763",
            "extra": "mean: 3.234128960132186 msec\nrounds: 301"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8837957390201315,
            "unit": "iter/sec",
            "range": "stddev: 0.00514694359622283",
            "extra": "mean: 1.131483164999986 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.36668785976931,
            "unit": "iter/sec",
            "range": "stddev: 0.0006647065661284569",
            "extra": "mean: 9.768802927080008 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11778296.608725486,
            "unit": "iter/sec",
            "range": "stddev: 3.3192446405871773e-9",
            "extra": "mean: 84.90192030473933 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6184786.81633291,
            "unit": "iter/sec",
            "range": "stddev: 8.02112518290796e-9",
            "extra": "mean: 161.68706047525146 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.472614385986454,
            "unit": "iter/sec",
            "range": "stddev: 0.0008355074260394334",
            "extra": "mean: 21.518049139528163 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8377.774733363134,
            "unit": "iter/sec",
            "range": "stddev: 0.00001411058564910235",
            "extra": "mean: 119.36343860114329 usec\nrounds: 3860"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 335.5060259883004,
            "unit": "iter/sec",
            "range": "stddev: 0.000012682536713628976",
            "extra": "mean: 2.980572396738029 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5045.206898442493,
            "unit": "iter/sec",
            "range": "stddev: 0.00005340672120698783",
            "extra": "mean: 198.20792687584532 usec\nrounds: 2106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 284.07036681254465,
            "unit": "iter/sec",
            "range": "stddev: 0.00026060229957209675",
            "extra": "mean: 3.5202545454517282 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 138.32325330235668,
            "unit": "iter/sec",
            "range": "stddev: 0.00007446553886950963",
            "extra": "mean: 7.229442455449843 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.496634614339191,
            "unit": "iter/sec",
            "range": "stddev: 0.0001229286018629596",
            "extra": "mean: 64.53013992307014 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6763868445254434,
            "unit": "iter/sec",
            "range": "stddev: 0.059827467255013984",
            "extra": "mean: 1.4784438935999789 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5218.116417778049,
            "unit": "iter/sec",
            "range": "stddev: 0.00002182860904621167",
            "extra": "mean: 191.6400325207414 usec\nrounds: 2337"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 160.47872513366192,
            "unit": "iter/sec",
            "range": "stddev: 0.0034762240997784923",
            "extra": "mean: 6.231355584156748 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1931636.7475613826,
            "unit": "iter/sec",
            "range": "stddev: 1.3669455452778199e-7",
            "extra": "mean: 517.6956802372193 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 119.82215316684102,
            "unit": "iter/sec",
            "range": "stddev: 0.0006446188419995539",
            "extra": "mean: 8.345702139132774 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 534.2956046488296,
            "unit": "iter/sec",
            "range": "stddev: 0.00013320627030252445",
            "extra": "mean: 1.871623107693837 msec\nrounds: 455"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 149698.11777086064,
            "unit": "iter/sec",
            "range": "stddev: 4.329799661307603e-7",
            "extra": "mean: 6.6801107114164004 usec\nrounds: 35588"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.286522643947563,
            "unit": "iter/sec",
            "range": "stddev: 0.004612164731915618",
            "extra": "mean: 97.21458209090562 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 289.1027380818199,
            "unit": "iter/sec",
            "range": "stddev: 0.000033007747165422086",
            "extra": "mean: 3.4589779627648727 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5607758.6634915,
            "unit": "iter/sec",
            "range": "stddev: 9.821865183078673e-9",
            "extra": "mean: 178.32436451124096 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 311.5742705792376,
            "unit": "iter/sec",
            "range": "stddev: 0.00028462356059900603",
            "extra": "mean: 3.209507634057628 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 217.8915501240315,
            "unit": "iter/sec",
            "range": "stddev: 0.004045577866431297",
            "extra": "mean: 4.589439101382155 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 98.68283324121884,
            "unit": "iter/sec",
            "range": "stddev: 0.01779497575832316",
            "extra": "mean: 10.133474761062189 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 85.49608066295195,
            "unit": "iter/sec",
            "range": "stddev: 0.00018164897286166798",
            "extra": "mean: 11.696442600009505 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5571.326160064264,
            "unit": "iter/sec",
            "range": "stddev: 0.000051199644775694664",
            "extra": "mean: 179.49047879624865 usec\nrounds: 2028"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 112.59396693710886,
            "unit": "iter/sec",
            "range": "stddev: 0.0006890381326202033",
            "extra": "mean: 8.88147053703655 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.41630264775567,
            "unit": "iter/sec",
            "range": "stddev: 0.0005684505669533439",
            "extra": "mean: 10.371689979166376 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 312.473736032238,
            "unit": "iter/sec",
            "range": "stddev: 0.00019735016860172888",
            "extra": "mean: 3.200268965635018 msec\nrounds: 291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8707889768180986,
            "unit": "iter/sec",
            "range": "stddev: 0.006460776532971993",
            "extra": "mean: 1.1483838526000227 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 102.18662726808039,
            "unit": "iter/sec",
            "range": "stddev: 0.014759160608550334",
            "extra": "mean: 9.786016299144125 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.03674538943584,
            "unit": "iter/sec",
            "range": "stddev: 0.0006840191690262987",
            "extra": "mean: 9.342586009707807 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 199.25150088351776,
            "unit": "iter/sec",
            "range": "stddev: 0.0000212493816141237",
            "extra": "mean: 5.018782772354618 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5233.786127795956,
            "unit": "iter/sec",
            "range": "stddev: 0.000050432609637481916",
            "extra": "mean: 191.06627125803448 usec\nrounds: 2164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.6703832103702,
            "unit": "iter/sec",
            "range": "stddev: 0.0006666471523253755",
            "extra": "mean: 9.73990715463693 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 290.909148195761,
            "unit": "iter/sec",
            "range": "stddev: 0.0001475215740208983",
            "extra": "mean: 3.4374993230775663 msec\nrounds: 260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.14980324958582,
            "unit": "iter/sec",
            "range": "stddev: 0.00007214643273348306",
            "extra": "mean: 8.996867027776105 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 161.59220709835117,
            "unit": "iter/sec",
            "range": "stddev: 0.00005448648423825369",
            "extra": "mean: 6.1884172384090395 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.363582388014656,
            "unit": "iter/sec",
            "range": "stddev: 0.0008730847619853584",
            "extra": "mean: 26.764028931036762 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5360.3254027663,
            "unit": "iter/sec",
            "range": "stddev: 0.00005667277661127379",
            "extra": "mean: 186.5558384727783 usec\nrounds: 2173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5358.602166003926,
            "unit": "iter/sec",
            "range": "stddev: 0.00005137841322309594",
            "extra": "mean: 186.6158317077923 usec\nrounds: 2769"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.22658472050199,
            "unit": "iter/sec",
            "range": "stddev: 0.000978220205335185",
            "extra": "mean: 24.85918222857078 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.74404249053899,
            "unit": "iter/sec",
            "range": "stddev: 0.030562085188696908",
            "extra": "mean: 32.52662691666962 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5570.397517480625,
            "unit": "iter/sec",
            "range": "stddev: 0.0000546825299559629",
            "extra": "mean: 179.52040170595924 usec\nrounds: 2345"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1703517792782831,
            "unit": "iter/sec",
            "range": "stddev: 0.1210035237442954",
            "extra": "mean: 5.870205783800008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1186.5638551923541,
            "unit": "iter/sec",
            "range": "stddev: 0.000010949451267495277",
            "extra": "mean: 842.7696458340961 usec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7051798502382898,
            "unit": "iter/sec",
            "range": "stddev: 0.0014144052382327335",
            "extra": "mean: 586.4484029999858 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5565.708860142907,
            "unit": "iter/sec",
            "range": "stddev: 0.00004882838234770721",
            "extra": "mean: 179.6716330531029 usec\nrounds: 2142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13902.497167038662,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017834981451718796",
            "extra": "mean: 71.92952373843264 usec\nrounds: 6698"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 72019.90979775763,
            "unit": "iter/sec",
            "range": "stddev: 4.698109966160835e-7",
            "extra": "mean: 13.885049326056437 usec\nrounds: 12772"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.21575283996127,
            "unit": "iter/sec",
            "range": "stddev: 0.0009505994231872089",
            "extra": "mean: 41.29543304347664 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 62.61518475928282,
            "unit": "iter/sec",
            "range": "stddev: 0.0002680745548802616",
            "extra": "mean: 15.970566945452447 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.73343416599708,
            "unit": "iter/sec",
            "range": "stddev: 0.0006872943097489113",
            "extra": "mean: 9.733929446806929 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2654624.074554981,
            "unit": "iter/sec",
            "range": "stddev: 1.7007994574699368e-8",
            "extra": "mean: 376.7011719607248 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 59.016593808789274,
            "unit": "iter/sec",
            "range": "stddev: 0.0006747139742745478",
            "extra": "mean: 16.9443869166687 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.86746001650208,
            "unit": "iter/sec",
            "range": "stddev: 0.0007336022202974091",
            "extra": "mean: 9.357385305551228 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7111065.608741042,
            "unit": "iter/sec",
            "range": "stddev: 5.383232605501731e-9",
            "extra": "mean: 140.6258998329108 nsec\nrounds: 67568"
          }
        ]
      }
    ]
  }
}