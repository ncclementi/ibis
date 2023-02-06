window.BENCHMARK_DATA = {
  "lastUpdate": 1675680760118,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "3a877422735e25332688715ff589035ea18fc1d9",
          "message": "chore(deps): lock file maintenance",
          "timestamp": "2023-02-06T05:44:48-05:00",
          "tree_id": "5897be33e781acb8c71d76b7a94631fb35f60f54",
          "url": "https://github.com/ibis-project/ibis/commit/3a877422735e25332688715ff589035ea18fc1d9"
        },
        "date": 1675680679039,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.27823057012284,
            "unit": "iter/sec",
            "range": "stddev: 0.0001188961165125671",
            "extra": "mean: 14.645956575763691 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 166.87265832147423,
            "unit": "iter/sec",
            "range": "stddev: 0.003163375674249857",
            "extra": "mean: 5.992593454546254 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10272.131762750418,
            "unit": "iter/sec",
            "range": "stddev: 0.000004170152210858074",
            "extra": "mean: 97.35077616763795 usec\nrounds: 4624"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5302.557142385776,
            "unit": "iter/sec",
            "range": "stddev: 0.00004604293589258754",
            "extra": "mean: 188.58825527905023 usec\nrounds: 1610"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 249.87674977183158,
            "unit": "iter/sec",
            "range": "stddev: 0.0001970634269078287",
            "extra": "mean: 4.001972976329825 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 141.49284859767684,
            "unit": "iter/sec",
            "range": "stddev: 0.0001363794852704448",
            "extra": "mean: 7.067495000001145 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5302.541728057357,
            "unit": "iter/sec",
            "range": "stddev: 0.001187357038180034",
            "extra": "mean: 188.58880349940418 usec\nrounds: 2458"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6092.1535816342885,
            "unit": "iter/sec",
            "range": "stddev: 0.000048705546194212914",
            "extra": "mean: 164.14556635844676 usec\nrounds: 648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 6113.179491695263,
            "unit": "iter/sec",
            "range": "stddev: 0.000046836993002018256",
            "extra": "mean: 163.58099763936215 usec\nrounds: 2541"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5856.7803561539495,
            "unit": "iter/sec",
            "range": "stddev: 0.000060799396665101466",
            "extra": "mean: 170.74227462692204 usec\nrounds: 335"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 55170.24680301325,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020369300532413476",
            "extra": "mean: 18.12571191806564 usec\nrounds: 12611"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.803253182744847,
            "unit": "iter/sec",
            "range": "stddev: 0.00041744553370679286",
            "extra": "mean: 38.75480323809403 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 255.29043887166787,
            "unit": "iter/sec",
            "range": "stddev: 0.0001908155937533427",
            "extra": "mean: 3.917107136561001 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5998385529963415,
            "unit": "iter/sec",
            "range": "stddev: 0.0014622986447647172",
            "extra": "mean: 625.0630716000046 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 144.0512276670672,
            "unit": "iter/sec",
            "range": "stddev: 0.0005545485604987474",
            "extra": "mean: 6.9419748529405885 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 119937.12984313983,
            "unit": "iter/sec",
            "range": "stddev: 5.006302718570778e-7",
            "extra": "mean: 8.337701605064698 usec\nrounds: 31646"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 78.83804398884241,
            "unit": "iter/sec",
            "range": "stddev: 0.012051809898008801",
            "extra": "mean: 12.684231487802075 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 268.8539326021282,
            "unit": "iter/sec",
            "range": "stddev: 0.000150719018308868",
            "extra": "mean: 3.719491808512546 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4284529.425772408,
            "unit": "iter/sec",
            "range": "stddev: 3.0105763851086045e-8",
            "extra": "mean: 233.39786021454222 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 250.2689953355347,
            "unit": "iter/sec",
            "range": "stddev: 0.000259636362687642",
            "extra": "mean: 3.995700700597386 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1513367.04466987,
            "unit": "iter/sec",
            "range": "stddev: 1.1560854483378809e-7",
            "extra": "mean: 660.7782319048335 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.10406013560048,
            "unit": "iter/sec",
            "range": "stddev: 0.0007261859022712249",
            "extra": "mean: 28.486733333329116 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 985.2911411539113,
            "unit": "iter/sec",
            "range": "stddev: 0.000014519750570886807",
            "extra": "mean: 1.0149284391503435 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 103.70671720852626,
            "unit": "iter/sec",
            "range": "stddev: 0.0001392697393299021",
            "extra": "mean: 9.642576941176044 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 322.662925817116,
            "unit": "iter/sec",
            "range": "stddev: 0.000032893576011806386",
            "extra": "mean: 3.099209484534321 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 147.73576814443427,
            "unit": "iter/sec",
            "range": "stddev: 0.00012057525206734099",
            "extra": "mean: 6.76884151048883 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 147.23752862179688,
            "unit": "iter/sec",
            "range": "stddev: 0.007373171541770562",
            "extra": "mean: 6.7917467058867835 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 159.71638940506895,
            "unit": "iter/sec",
            "range": "stddev: 0.0006694098425382781",
            "extra": "mean: 6.261098211178714 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11635365.759582745,
            "unit": "iter/sec",
            "range": "stddev: 3.3818636104182183e-9",
            "extra": "mean: 85.94487020542489 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19009.771689375157,
            "unit": "iter/sec",
            "range": "stddev: 0.000025142590206114478",
            "extra": "mean: 52.604524469850155 usec\nrounds: 5190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 147.66098269017627,
            "unit": "iter/sec",
            "range": "stddev: 0.0006367660870471464",
            "extra": "mean: 6.7722697071453855 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 265.58843344152876,
            "unit": "iter/sec",
            "range": "stddev: 0.000014385752811891431",
            "extra": "mean: 3.7652242119201977 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 63.36509818495148,
            "unit": "iter/sec",
            "range": "stddev: 0.00032446352086699975",
            "extra": "mean: 15.78155843901918 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 625.0080287393755,
            "unit": "iter/sec",
            "range": "stddev: 0.00002435810018962951",
            "extra": "mean: 1.5999794466912263 msec\nrounds: 544"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5250.78063605153,
            "unit": "iter/sec",
            "range": "stddev: 0.000045279292386065166",
            "extra": "mean: 190.44787229046725 usec\nrounds: 2122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 248.39257755805525,
            "unit": "iter/sec",
            "range": "stddev: 0.0002032457551438833",
            "extra": "mean: 4.025885192830596 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.927050319612156,
            "unit": "iter/sec",
            "range": "stddev: 0.0001391926296756571",
            "extra": "mean: 202.96119079999926 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5290869.865280101,
            "unit": "iter/sec",
            "range": "stddev: 5.480320482616052e-9",
            "extra": "mean: 189.00483766608536 nsec\nrounds: 54055"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 250.4270311676157,
            "unit": "iter/sec",
            "range": "stddev: 0.00021078448352733744",
            "extra": "mean: 3.9931791521765896 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 43.77634406384934,
            "unit": "iter/sec",
            "range": "stddev: 0.00021460736603129768",
            "extra": "mean: 22.843387710528425 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 158.80950886748428,
            "unit": "iter/sec",
            "range": "stddev: 0.0005863418813814101",
            "extra": "mean: 6.2968521666698924 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1459125.568381069,
            "unit": "iter/sec",
            "range": "stddev: 8.091028900567808e-8",
            "extra": "mean: 685.3419758174215 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4564990.129590399,
            "unit": "iter/sec",
            "range": "stddev: 1.0137063616443904e-8",
            "extra": "mean: 219.05852403017735 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 239.79561881051194,
            "unit": "iter/sec",
            "range": "stddev: 0.00022478332202010632",
            "extra": "mean: 4.17021797545937 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2580280132851587,
            "unit": "iter/sec",
            "range": "stddev: 0.0014723682597095552",
            "extra": "mean: 442.8643020000095 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.17643443131358,
            "unit": "iter/sec",
            "range": "stddev: 0.0006593901815697598",
            "extra": "mean: 22.63650321428318 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.092605159347427,
            "unit": "iter/sec",
            "range": "stddev: 0.0003688482907599615",
            "extra": "mean: 109.97948140000062 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 88.5719321783127,
            "unit": "iter/sec",
            "range": "stddev: 0.000595188543061801",
            "extra": "mean: 11.29025838554367 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 356119.52522789506,
            "unit": "iter/sec",
            "range": "stddev: 6.347067073581936e-7",
            "extra": "mean: 2.8080459765862607 usec\nrounds: 522"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8643023485659865,
            "unit": "iter/sec",
            "range": "stddev: 0.005311051015455179",
            "extra": "mean: 1.157002525400003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7556481921197832,
            "unit": "iter/sec",
            "range": "stddev: 0.002669439021233881",
            "extra": "mean: 1.3233671573999914 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8581085358601306,
            "unit": "iter/sec",
            "range": "stddev: 0.005839395188816791",
            "extra": "mean: 1.1653537498000106 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 91.21973279856162,
            "unit": "iter/sec",
            "range": "stddev: 0.0006037328942596786",
            "extra": "mean: 10.962540333332004 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 159.00940635547946,
            "unit": "iter/sec",
            "range": "stddev: 0.0006428494563323704",
            "extra": "mean: 6.288936125982461 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 77.6043842900129,
            "unit": "iter/sec",
            "range": "stddev: 0.013479342205176452",
            "extra": "mean: 12.885869904758621 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 94.64792948678723,
            "unit": "iter/sec",
            "range": "stddev: 0.0005975673862531584",
            "extra": "mean: 10.565471483870116 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 82.27039056327226,
            "unit": "iter/sec",
            "range": "stddev: 0.0006388635487505214",
            "extra": "mean: 12.155041360000874 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 158.77011767652235,
            "unit": "iter/sec",
            "range": "stddev: 0.0006654880637018034",
            "extra": "mean: 6.298414428572739 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 145.9686248479024,
            "unit": "iter/sec",
            "range": "stddev: 0.00019893771129436956",
            "extra": "mean: 6.850787291049623 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.617647677546486,
            "unit": "iter/sec",
            "range": "stddev: 0.00045855674898776124",
            "extra": "mean: 17.979904612249754 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5313.377177474936,
            "unit": "iter/sec",
            "range": "stddev: 0.00004573494406883519",
            "extra": "mean: 188.20421863505422 usec\nrounds: 2200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 122.19643975105177,
            "unit": "iter/sec",
            "range": "stddev: 0.00028266778270879536",
            "extra": "mean: 8.183544479996954 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10950.929337591457,
            "unit": "iter/sec",
            "range": "stddev: 0.000001432206525386506",
            "extra": "mean: 91.31645079356704 usec\nrounds: 5985"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 97.68990913452227,
            "unit": "iter/sec",
            "range": "stddev: 0.00017948723115790392",
            "extra": "mean: 10.23647179999898 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.511546147686914,
            "unit": "iter/sec",
            "range": "stddev: 0.000489594470880913",
            "extra": "mean: 26.658458599997306 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5918029610013205,
            "unit": "iter/sec",
            "range": "stddev: 0.0018637317370922405",
            "extra": "mean: 1.6897515996000039 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4571.206018096544,
            "unit": "iter/sec",
            "range": "stddev: 0.000017777370690803434",
            "extra": "mean: 218.76065004315896 usec\nrounds: 2186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.96132992576007,
            "unit": "iter/sec",
            "range": "stddev: 0.0000761337825700571",
            "extra": "mean: 13.70589051786096 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 279.9588852158581,
            "unit": "iter/sec",
            "range": "stddev: 0.00004321601784518232",
            "extra": "mean: 3.5719530717125307 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15304627015445937,
            "unit": "iter/sec",
            "range": "stddev: 0.06925544723838932",
            "extra": "mean: 6.53397171319998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 220.69817570651435,
            "unit": "iter/sec",
            "range": "stddev: 0.00036372697623274073",
            "extra": "mean: 4.531075061217567 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 90.20935818270056,
            "unit": "iter/sec",
            "range": "stddev: 0.001291425850808651",
            "extra": "mean: 11.085324406972335 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1469.3396857373884,
            "unit": "iter/sec",
            "range": "stddev: 0.000006659740038064677",
            "extra": "mean: 680.5778198920351 usec\nrounds: 1116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 416.11898328696094,
            "unit": "iter/sec",
            "range": "stddev: 0.000024319625243972572",
            "extra": "mean: 2.40315880833148 msec\nrounds: 360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9757.171031219652,
            "unit": "iter/sec",
            "range": "stddev: 0.000014788305095337613",
            "extra": "mean: 102.48872309405438 usec\nrounds: 5222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 88.9747176676845,
            "unit": "iter/sec",
            "range": "stddev: 0.0006204797595150988",
            "extra": "mean: 11.239147773808543 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 519.0362548570599,
            "unit": "iter/sec",
            "range": "stddev: 0.0000654249700391955",
            "extra": "mean: 1.9266476872129004 msec\nrounds: 438"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1974671.9300893466,
            "unit": "iter/sec",
            "range": "stddev: 1.61674488858009e-8",
            "extra": "mean: 506.41323490831894 nsec\nrounds: 98040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1464175.2185050058,
            "unit": "iter/sec",
            "range": "stddev: 8.411185849800857e-8",
            "extra": "mean: 682.9783671800215 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.715435464127628,
            "unit": "iter/sec",
            "range": "stddev: 0.0005816119818348982",
            "extra": "mean: 72.9105541428469 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 94.44554236821524,
            "unit": "iter/sec",
            "range": "stddev: 0.000615780353857808",
            "extra": "mean: 10.588112206516806 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 561100.7502742312,
            "unit": "iter/sec",
            "range": "stddev: 9.528148955966806e-7",
            "extra": "mean: 1.7822111260968054 usec\nrounds: 24753"
          }
        ]
      }
    ]
  }
}