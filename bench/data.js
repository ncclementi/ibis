window.BENCHMARK_DATA = {
  "lastUpdate": 1680700676736,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "9a845df3e0c473c129c94c45b3683aaf68863410",
          "message": "fix(snowflake): make sure ephemeral tables following backend quoting rules",
          "timestamp": "2023-04-05T15:10:40+02:00",
          "tree_id": "90e2953ad36476882fa746a1c62efd8931d83874",
          "url": "https://github.com/ibis-project/ibis/commit/9a845df3e0c473c129c94c45b3683aaf68863410"
        },
        "date": 1680700597987,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 90.72623097082422,
            "unit": "iter/sec",
            "range": "stddev: 0.008351261819695532",
            "extra": "mean: 11.022170647886613 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 99.59253277451003,
            "unit": "iter/sec",
            "range": "stddev: 0.0008329833483326159",
            "extra": "mean: 10.040913431372664 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 88.68205249103002,
            "unit": "iter/sec",
            "range": "stddev: 0.0007258908806947819",
            "extra": "mean: 11.276238786885854 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1781.5902824398104,
            "unit": "iter/sec",
            "range": "stddev: 0.000014146575896236428",
            "extra": "mean: 561.2962811127054 usec\nrounds: 1366"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 269.61128769152185,
            "unit": "iter/sec",
            "range": "stddev: 0.0003214740269749147",
            "extra": "mean: 3.709043521739189 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12146.801032343312,
            "unit": "iter/sec",
            "range": "stddev: 0.000012816316704903927",
            "extra": "mean: 82.32620237520133 usec\nrounds: 4126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12662.707132941558,
            "unit": "iter/sec",
            "range": "stddev: 0.000006308842615821027",
            "extra": "mean: 78.97205467214332 usec\nrounds: 1006"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 55.96551576107456,
            "unit": "iter/sec",
            "range": "stddev: 0.0012827100973233686",
            "extra": "mean: 17.868145882352888 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1928189.6019388612,
            "unit": "iter/sec",
            "range": "stddev: 9.540840411990172e-8",
            "extra": "mean: 518.6211973109208 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17166893334028804,
            "unit": "iter/sec",
            "range": "stddev: 0.058381673341233314",
            "extra": "mean: 5.8251658034 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 92.55205479262133,
            "unit": "iter/sec",
            "range": "stddev: 0.00016016368953152154",
            "extra": "mean: 10.804730399996743 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 84.6591117136946,
            "unit": "iter/sec",
            "range": "stddev: 0.01452727136898878",
            "extra": "mean: 11.812077634146005 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 93.35454759956316,
            "unit": "iter/sec",
            "range": "stddev: 0.000919316261560149",
            "extra": "mean: 10.711850956521365 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 98.7444989272097,
            "unit": "iter/sec",
            "range": "stddev: 0.000935191573494599",
            "extra": "mean: 10.127146432098037 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1755689.7631760244,
            "unit": "iter/sec",
            "range": "stddev: 9.765136890111285e-8",
            "extra": "mean: 569.5767105180419 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7868043577083225,
            "unit": "iter/sec",
            "range": "stddev: 0.005281353581135598",
            "extra": "mean: 1.2709639825999943 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.67317914140138,
            "unit": "iter/sec",
            "range": "stddev: 0.0005782693118025792",
            "extra": "mean: 13.391689111111726 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.501786194209394,
            "unit": "iter/sec",
            "range": "stddev: 0.0007415322561184984",
            "extra": "mean: 22.98756183333713 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 281.28501213028096,
            "unit": "iter/sec",
            "range": "stddev: 0.00029841360700666805",
            "extra": "mean: 3.5551129881631818 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6822050629141408,
            "unit": "iter/sec",
            "range": "stddev: 0.004066561042732199",
            "extra": "mean: 1.4658349144000056 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 98.66056465208818,
            "unit": "iter/sec",
            "range": "stddev: 0.0008114020965624972",
            "extra": "mean: 10.135761978723226 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6185383.827315457,
            "unit": "iter/sec",
            "range": "stddev: 1.0731804020571065e-8",
            "extra": "mean: 161.67145449932246 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.77312461456727,
            "unit": "iter/sec",
            "range": "stddev: 0.0002265701154877765",
            "extra": "mean: 10.333447472971953 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 498692.1368220243,
            "unit": "iter/sec",
            "range": "stddev: 9.73591366243369e-8",
            "extra": "mean: 2.0052451726482405 usec\nrounds: 2227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2705191.0922647407,
            "unit": "iter/sec",
            "range": "stddev: 2.2932677207785355e-8",
            "extra": "mean: 369.6596528277846 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 276.12774558552667,
            "unit": "iter/sec",
            "range": "stddev: 0.0003092115418825673",
            "extra": "mean: 3.621512202185652 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2209.1311264937963,
            "unit": "iter/sec",
            "range": "stddev: 0.00008405191205380154",
            "extra": "mean: 452.6666561378552 usec\nrounds: 1393"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 100.44594717932294,
            "unit": "iter/sec",
            "range": "stddev: 0.0007394296653012033",
            "extra": "mean: 9.955603268041585 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.491587609152438,
            "unit": "iter/sec",
            "range": "stddev: 0.0020892611284971867",
            "extra": "mean: 401.3505269999996 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13655.434994287602,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015359563776571782",
            "extra": "mean: 73.23091504725585 usec\nrounds: 6227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 99.61079614720347,
            "unit": "iter/sec",
            "range": "stddev: 0.0008604862143539827",
            "extra": "mean: 10.03907245678685 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.293049742626124,
            "unit": "iter/sec",
            "range": "stddev: 0.029148033751635306",
            "extra": "mean: 26.8146479545489 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 120.53062099260062,
            "unit": "iter/sec",
            "range": "stddev: 0.00006105282438535887",
            "extra": "mean: 8.296646874999425 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 73993.14079892426,
            "unit": "iter/sec",
            "range": "stddev: 7.126744314747416e-7",
            "extra": "mean: 13.514766222959661 usec\nrounds: 14347"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 222.49820936396327,
            "unit": "iter/sec",
            "range": "stddev: 0.0040723485633436945",
            "extra": "mean: 4.494418192661482 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8335.13334824278,
            "unit": "iter/sec",
            "range": "stddev: 0.000015232757736826588",
            "extra": "mean: 119.97408538290763 usec\nrounds: 1382"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1710.464819408699,
            "unit": "iter/sec",
            "range": "stddev: 0.004292814371494675",
            "extra": "mean: 584.6364033056792 usec\nrounds: 1210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.20964186920479,
            "unit": "iter/sec",
            "range": "stddev: 0.0010397541410183822",
            "extra": "mean: 39.66736240000159 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9141871928647834,
            "unit": "iter/sec",
            "range": "stddev: 0.006942166529063882",
            "extra": "mean: 1.0938678727999958 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 160.50227077642356,
            "unit": "iter/sec",
            "range": "stddev: 0.0002354692438123165",
            "extra": "mean: 6.230441445859542 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 83.10580666322909,
            "unit": "iter/sec",
            "range": "stddev: 0.015390030311971982",
            "extra": "mean: 12.032853541176912 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2136.172964136461,
            "unit": "iter/sec",
            "range": "stddev: 0.00011648670405860076",
            "extra": "mean: 468.1268870960764 usec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9047638324689562,
            "unit": "iter/sec",
            "range": "stddev: 0.00562313037532393",
            "extra": "mean: 1.1052608030000044 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1161.5516255118853,
            "unit": "iter/sec",
            "range": "stddev: 0.00001245231250510827",
            "extra": "mean: 860.917395349784 usec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6536001754903549,
            "unit": "iter/sec",
            "range": "stddev: 0.0037554430146063598",
            "extra": "mean: 604.7411066000052 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2228.4911840928157,
            "unit": "iter/sec",
            "range": "stddev: 0.00007947336587225617",
            "extra": "mean: 448.73410634876916 usec\nrounds: 1260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 339.11414078220616,
            "unit": "iter/sec",
            "range": "stddev: 0.00001081628988607937",
            "extra": "mean: 2.9488596308410613 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 276.88286803424575,
            "unit": "iter/sec",
            "range": "stddev: 0.0002760243583872905",
            "extra": "mean: 3.611635516128491 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 274.7715601342993,
            "unit": "iter/sec",
            "range": "stddev: 0.0002730406052204664",
            "extra": "mean: 3.6393868401490783 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 196.91402065891967,
            "unit": "iter/sec",
            "range": "stddev: 0.000039959055598485364",
            "extra": "mean: 5.078358547825949 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 161.42843767162017,
            "unit": "iter/sec",
            "range": "stddev: 0.0001133619609168547",
            "extra": "mean: 6.194695398305304 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 97.56425239149368,
            "unit": "iter/sec",
            "range": "stddev: 0.0009596252303931497",
            "extra": "mean: 10.249655744681203 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 222.73273848371585,
            "unit": "iter/sec",
            "range": "stddev: 0.011819260517549893",
            "extra": "mean: 4.489685740891255 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1877195.550266045,
            "unit": "iter/sec",
            "range": "stddev: 8.1188649506379e-8",
            "extra": "mean: 532.7095516811104 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2144.1580642070426,
            "unit": "iter/sec",
            "range": "stddev: 0.00009584924105271937",
            "extra": "mean: 466.38352679928107 usec\nrounds: 1306"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2126.109684696653,
            "unit": "iter/sec",
            "range": "stddev: 0.00008429283521988612",
            "extra": "mean: 470.34262023159783 usec\nrounds: 1730"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148218.70956545093,
            "unit": "iter/sec",
            "range": "stddev: 3.2405778419185896e-7",
            "extra": "mean: 6.746786575944494 usec\nrounds: 42193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 160.40816826618445,
            "unit": "iter/sec",
            "range": "stddev: 0.004030151280515313",
            "extra": "mean: 6.234096497758023 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 93.90793487605232,
            "unit": "iter/sec",
            "range": "stddev: 0.0010361996142407694",
            "extra": "mean: 10.648727408603811 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.9591414022355,
            "unit": "iter/sec",
            "range": "stddev: 0.0002501938331627987",
            "extra": "mean: 7.2485229310349695 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.39947986876654,
            "unit": "iter/sec",
            "range": "stddev: 0.0002473589461378104",
            "extra": "mean: 96.15865529999894 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.09793509675094,
            "unit": "iter/sec",
            "range": "stddev: 0.00013210819713779207",
            "extra": "mean: 6.169110046979517 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 276.87480486563817,
            "unit": "iter/sec",
            "range": "stddev: 0.00029789784242895357",
            "extra": "mean: 3.611740694445925 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2107.021456861565,
            "unit": "iter/sec",
            "range": "stddev: 0.00008900801639975658",
            "extra": "mean: 474.60361485331646 usec\nrounds: 1158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 779652.2282376827,
            "unit": "iter/sec",
            "range": "stddev: 2.675691844556511e-7",
            "extra": "mean: 1.2826231539931452 usec\nrounds: 24039"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 287.6441861291867,
            "unit": "iter/sec",
            "range": "stddev: 0.00013401404532501225",
            "extra": "mean: 3.4765173371203826 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 533.5159695267148,
            "unit": "iter/sec",
            "range": "stddev: 0.00004268469501568994",
            "extra": "mean: 1.874358139433213 msec\nrounds: 459"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2165.7925941060366,
            "unit": "iter/sec",
            "range": "stddev: 0.00008932659694268058",
            "extra": "mean: 461.72472965388687 usec\nrounds: 1069"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11484403.17319553,
            "unit": "iter/sec",
            "range": "stddev: 4.192438554234256e-9",
            "extra": "mean: 87.07461632263764 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6960194.1461509755,
            "unit": "iter/sec",
            "range": "stddev: 4.213917309867192e-9",
            "extra": "mean: 143.67415319202877 nsec\nrounds: 60238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5612235.091603096,
            "unit": "iter/sec",
            "range": "stddev: 1.0806355067630854e-8",
            "extra": "mean: 178.1821295218855 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 109.65221122850339,
            "unit": "iter/sec",
            "range": "stddev: 0.000345539338513122",
            "extra": "mean: 9.119743129631082 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.405779830133188,
            "unit": "iter/sec",
            "range": "stddev: 0.0000946810307239582",
            "extra": "mean: 64.91070306249824 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 94.88042985322117,
            "unit": "iter/sec",
            "range": "stddev: 0.0008498376776725172",
            "extra": "mean: 10.539581255554886 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 77.75764844930309,
            "unit": "iter/sec",
            "range": "stddev: 0.022292840364442006",
            "extra": "mean: 12.860471219779571 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 746.6202312309443,
            "unit": "iter/sec",
            "range": "stddev: 0.000010969374444921519",
            "extra": "mean: 1.3393690100672886 msec\nrounds: 596"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 98.05195803489026,
            "unit": "iter/sec",
            "range": "stddev: 0.0008936963275992018",
            "extra": "mean: 10.19867445833326 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 677.8818213954837,
            "unit": "iter/sec",
            "range": "stddev: 0.00011026422324127714",
            "extra": "mean: 1.4751833851236866 msec\nrounds: 605"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.79341851086386,
            "unit": "iter/sec",
            "range": "stddev: 0.00005090422259873316",
            "extra": "mean: 10.439130532611598 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 297.74368052440605,
            "unit": "iter/sec",
            "range": "stddev: 0.000029011301095321277",
            "extra": "mean: 3.358593533332876 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 51.60830901344684,
            "unit": "iter/sec",
            "range": "stddev: 0.00028741911270079305",
            "extra": "mean: 19.376724777776467 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 98.43292706733403,
            "unit": "iter/sec",
            "range": "stddev: 0.0007519768297435414",
            "extra": "mean: 10.159202106383974 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5617.804270916936,
            "unit": "iter/sec",
            "range": "stddev: 0.00003773472394921601",
            "extra": "mean: 178.00548964956735 usec\nrounds: 2512"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 246.922407221732,
            "unit": "iter/sec",
            "range": "stddev: 0.0004981183963065389",
            "extra": "mean: 4.049855220721291 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.901782062615,
            "unit": "iter/sec",
            "range": "stddev: 0.0005799728548087863",
            "extra": "mean: 17.888517379998916 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 44.962452373614596,
            "unit": "iter/sec",
            "range": "stddev: 0.0006438860264605389",
            "extra": "mean: 22.24077974418566 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 36.10502196190831,
            "unit": "iter/sec",
            "range": "stddev: 0.0006307124970544196",
            "extra": "mean: 27.696978028569674 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.5873421519969,
            "unit": "iter/sec",
            "range": "stddev: 0.00036310854246808093",
            "extra": "mean: 178.97597333333218 msec\nrounds: 6"
          }
        ]
      }
    ]
  }
}