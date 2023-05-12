window.BENCHMARK_DATA = {
  "lastUpdate": 1683859132591,
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
          "id": "5586cf7dfd3aaabd1d7b43357507ed68f259139d",
          "message": "chore(deps): update mariadb docker tag to v10.11.3",
          "timestamp": "2023-05-11T22:29:23-04:00",
          "tree_id": "acb3ce643e00c956de7c8df26c4dc300bbb0c948",
          "url": "https://github.com/ibis-project/ibis/commit/5586cf7dfd3aaabd1d7b43357507ed68f259139d"
        },
        "date": 1683859033581,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 75.45494593246256,
            "unit": "iter/sec",
            "range": "stddev: 0.009237125689094952",
            "extra": "mean: 13.25294170769229 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 78.94033043139198,
            "unit": "iter/sec",
            "range": "stddev: 0.0014923553650340584",
            "extra": "mean: 12.66779597368309 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 71.49082950113977,
            "unit": "iter/sec",
            "range": "stddev: 0.013515356995873333",
            "extra": "mean: 13.987808044443756 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.34264766907677,
            "unit": "iter/sec",
            "range": "stddev: 0.0030807013236390456",
            "extra": "mean: 30.91892816666686 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 8385.599319309571,
            "unit": "iter/sec",
            "range": "stddev: 0.000056486918600103164",
            "extra": "mean: 119.25206081541411 usec\nrounds: 4489"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 201.43904562584598,
            "unit": "iter/sec",
            "range": "stddev: 0.0007690072023952712",
            "extra": "mean: 4.964280866666762 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 127163.15553984244,
            "unit": "iter/sec",
            "range": "stddev: 0.000020354111028461177",
            "extra": "mean: 7.863913063141017 usec\nrounds: 35336"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 60.135714181180234,
            "unit": "iter/sec",
            "range": "stddev: 0.01605439612915544",
            "extra": "mean: 16.629053360655934 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 153.18730058048016,
            "unit": "iter/sec",
            "range": "stddev: 0.0006961649186132319",
            "extra": "mean: 6.527956274512645 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.534014959654346,
            "unit": "iter/sec",
            "range": "stddev: 0.05427901735602247",
            "extra": "mean: 1.8726067161999993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 80.06375940687875,
            "unit": "iter/sec",
            "range": "stddev: 0.0011598876461928014",
            "extra": "mean: 12.49004552631692 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 207.39757567788382,
            "unit": "iter/sec",
            "range": "stddev: 0.0006900525953718869",
            "extra": "mean: 4.8216571323530495 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 43.45589538149895,
            "unit": "iter/sec",
            "range": "stddev: 0.0027263684062381194",
            "extra": "mean: 23.011837432435996 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 81.45470920913208,
            "unit": "iter/sec",
            "range": "stddev: 0.0015214433322647567",
            "extra": "mean: 12.27676103333124 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 133.82479917298124,
            "unit": "iter/sec",
            "range": "stddev: 0.0013151028330061927",
            "extra": "mean: 7.472456571426684 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1600956.7796758884,
            "unit": "iter/sec",
            "range": "stddev: 0.000006520652116679624",
            "extra": "mean: 624.626481298545 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2189953.424237853,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011029198720799116",
            "extra": "mean: 456.63071594691854 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 87.82839722890874,
            "unit": "iter/sec",
            "range": "stddev: 0.00124245231394241",
            "extra": "mean: 11.385839108434165 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 121.9306988005313,
            "unit": "iter/sec",
            "range": "stddev: 0.011695137807530884",
            "extra": "mean: 8.201380044872199 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5447605.6017650375,
            "unit": "iter/sec",
            "range": "stddev: 7.557609606115895e-7",
            "extra": "mean: 183.56688664745107 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.14391348256272,
            "unit": "iter/sec",
            "range": "stddev: 0.004868743585839188",
            "extra": "mean: 49.64278668420787 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 50.776290971472704,
            "unit": "iter/sec",
            "range": "stddev: 0.002060223100551064",
            "extra": "mean: 19.694230926828098 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 861892.1427636544,
            "unit": "iter/sec",
            "range": "stddev: 0.00000838129329847956",
            "extra": "mean: 1.16023798151066 usec\nrounds: 52357"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5827.737380941889,
            "unit": "iter/sec",
            "range": "stddev: 0.00003282557806717717",
            "extra": "mean: 171.59318181876932 usec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 211.08096499257056,
            "unit": "iter/sec",
            "range": "stddev: 0.000507544516332965",
            "extra": "mean: 4.737518610620323 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 65.9609336183167,
            "unit": "iter/sec",
            "range": "stddev: 0.023618543188145023",
            "extra": "mean: 15.160488870374476 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1615.2485032914553,
            "unit": "iter/sec",
            "range": "stddev: 0.0001805257115527858",
            "extra": "mean: 619.0997843132254 usec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 35.9241516143384,
            "unit": "iter/sec",
            "range": "stddev: 0.001821891157542868",
            "extra": "mean: 27.836426333332536 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1980638.3543444015,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010780862265661804",
            "extra": "mean: 504.8877286489674 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 188.9684189390835,
            "unit": "iter/sec",
            "range": "stddev: 0.000661383818705772",
            "extra": "mean: 5.291889542253954 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 180.7547487920035,
            "unit": "iter/sec",
            "range": "stddev: 0.0008307209591927814",
            "extra": "mean: 5.532358107784548 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8534.904229152116,
            "unit": "iter/sec",
            "range": "stddev: 0.00008845942438424563",
            "extra": "mean: 117.16593099947917 usec\nrounds: 3942"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 72.97570912207908,
            "unit": "iter/sec",
            "range": "stddev: 0.0011818198798112575",
            "extra": "mean: 13.703189897437339 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1601.4695535745434,
            "unit": "iter/sec",
            "range": "stddev: 0.00027132172300590985",
            "extra": "mean: 624.4264823942239 usec\nrounds: 1420"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4794042.32374456,
            "unit": "iter/sec",
            "range": "stddev: 5.711691506401273e-7",
            "extra": "mean: 208.59223437536656 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1629.2049383834906,
            "unit": "iter/sec",
            "range": "stddev: 0.00021184164186042515",
            "extra": "mean: 613.7963226358787 usec\nrounds: 1184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 65.2124449385964,
            "unit": "iter/sec",
            "range": "stddev: 0.01665802152389315",
            "extra": "mean: 15.334496367090564 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 75.67894894598756,
            "unit": "iter/sec",
            "range": "stddev: 0.0016840335563978069",
            "extra": "mean: 13.21371416922961 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5675242330767558,
            "unit": "iter/sec",
            "range": "stddev: 0.022495581602743214",
            "extra": "mean: 1.7620392957999969 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4443962.759709987,
            "unit": "iter/sec",
            "range": "stddev: 8.03933587850947e-7",
            "extra": "mean: 225.02438793294942 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 319.82935917802604,
            "unit": "iter/sec",
            "range": "stddev: 0.00042538483803035334",
            "extra": "mean: 3.1266673033708945 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 6.740302585124423,
            "unit": "iter/sec",
            "range": "stddev: 0.0060780809497801265",
            "extra": "mean: 148.36129200000008 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 62.03171209819425,
            "unit": "iter/sec",
            "range": "stddev: 0.02072733597685912",
            "extra": "mean: 16.120786710143218 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 87.21193817538335,
            "unit": "iter/sec",
            "range": "stddev: 0.0012633754838045346",
            "extra": "mean: 11.466320103894473 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 22.06106781540774,
            "unit": "iter/sec",
            "range": "stddev: 0.005337513695487118",
            "extra": "mean: 45.32872154545424 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 171.3821018711724,
            "unit": "iter/sec",
            "range": "stddev: 0.004944340103527519",
            "extra": "mean: 5.8349150178569875 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1627.6672659416809,
            "unit": "iter/sec",
            "range": "stddev: 0.00020690077980119181",
            "extra": "mean: 614.3761817446477 usec\nrounds: 1227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 88.73396498062162,
            "unit": "iter/sec",
            "range": "stddev: 0.0007803614221852777",
            "extra": "mean: 11.269641790698605 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 255.9258022813248,
            "unit": "iter/sec",
            "range": "stddev: 0.0007324629343857066",
            "extra": "mean: 3.9073824955748564 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 14.705688583868282,
            "unit": "iter/sec",
            "range": "stddev: 0.001902477132558315",
            "extra": "mean: 68.00089599999902 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 529.611680307906,
            "unit": "iter/sec",
            "range": "stddev: 0.00024222369655188604",
            "extra": "mean: 1.8881758790112397 msec\nrounds: 405"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9569898.043465437,
            "unit": "iter/sec",
            "range": "stddev: 1.7472398647963698e-7",
            "extra": "mean: 104.49432119953883 nsec\nrounds: 100000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10939.1750527007,
            "unit": "iter/sec",
            "range": "stddev: 0.00009519853128429884",
            "extra": "mean: 91.41457149944013 usec\nrounds: 6028"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 162.0284859603414,
            "unit": "iter/sec",
            "range": "stddev: 0.0008410239509109599",
            "extra": "mean: 6.171754269460761 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 192.67665310483773,
            "unit": "iter/sec",
            "range": "stddev: 0.0007949359746376461",
            "extra": "mean: 5.190042404649244 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 67.44904687891986,
            "unit": "iter/sec",
            "range": "stddev: 0.021454073152876202",
            "extra": "mean: 14.826006389610441 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 82.52980407582878,
            "unit": "iter/sec",
            "range": "stddev: 0.0015434307460485753",
            "extra": "mean: 12.11683477500074 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 76.80731010293357,
            "unit": "iter/sec",
            "range": "stddev: 0.0014720602686332106",
            "extra": "mean: 13.019594081082214 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 80.94903714203288,
            "unit": "iter/sec",
            "range": "stddev: 0.0011568285373484085",
            "extra": "mean: 12.353451446808485 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 129.32331603437066,
            "unit": "iter/sec",
            "range": "stddev: 0.0008764354817107296",
            "extra": "mean: 7.732557675324586 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.742905412104647,
            "unit": "iter/sec",
            "range": "stddev: 0.015832762728655123",
            "extra": "mean: 573.7546013999975 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 64.46600110162312,
            "unit": "iter/sec",
            "range": "stddev: 0.022020211372626174",
            "extra": "mean: 15.512052599999445 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 75.96735282069464,
            "unit": "iter/sec",
            "range": "stddev: 0.0014940707890465455",
            "extra": "mean: 13.163549378379617 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3557643.131019811,
            "unit": "iter/sec",
            "range": "stddev: 6.697573568138788e-7",
            "extra": "mean: 281.0849664151272 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1647.6747226232033,
            "unit": "iter/sec",
            "range": "stddev: 0.0002781262282148087",
            "extra": "mean: 606.9159077757388 usec\nrounds: 1106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 941.1965344327184,
            "unit": "iter/sec",
            "range": "stddev: 0.0002622185503312578",
            "extra": "mean: 1.0624773502834068 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 29.52297221873473,
            "unit": "iter/sec",
            "range": "stddev: 0.03380640511237464",
            "extra": "mean: 33.871928361109205 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1632.4267320630788,
            "unit": "iter/sec",
            "range": "stddev: 0.0002143118311094676",
            "extra": "mean: 612.5849205717118 usec\nrounds: 1259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 193.53599918168467,
            "unit": "iter/sec",
            "range": "stddev: 0.0007602954071620775",
            "extra": "mean: 5.166997376344623 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 35.324821505209165,
            "unit": "iter/sec",
            "range": "stddev: 0.002067017016324945",
            "extra": "mean: 28.308706382353133 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1395.6169661000101,
            "unit": "iter/sec",
            "range": "stddev: 0.00016876271171295206",
            "extra": "mean: 716.5289791470906 usec\nrounds: 1055"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3115.245619866761,
            "unit": "iter/sec",
            "range": "stddev: 0.00023121907668506106",
            "extra": "mean: 321.001976095474 usec\nrounds: 1757"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1537746.3440881514,
            "unit": "iter/sec",
            "range": "stddev: 0.000003919633288264551",
            "extra": "mean: 650.3023101595975 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 78.72892094156205,
            "unit": "iter/sec",
            "range": "stddev: 0.0017526025839667704",
            "extra": "mean: 12.701812600000803 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 78.67511324040079,
            "unit": "iter/sec",
            "range": "stddev: 0.0017499793109724009",
            "extra": "mean: 12.710499658823316 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 142.61787526188056,
            "unit": "iter/sec",
            "range": "stddev: 0.0007115670757124007",
            "extra": "mean: 7.0117437815123855 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 101.9314876346977,
            "unit": "iter/sec",
            "range": "stddev: 0.0011247134674769066",
            "extra": "mean: 9.810511189474662 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 146.12340332672477,
            "unit": "iter/sec",
            "range": "stddev: 0.0010218237513576244",
            "extra": "mean: 6.843530722892137 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 63.13588957984303,
            "unit": "iter/sec",
            "range": "stddev: 0.024528734754935562",
            "extra": "mean: 15.838851826667906 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1612.5504116355396,
            "unit": "iter/sec",
            "range": "stddev: 0.0002553279622649543",
            "extra": "mean: 620.1356514403438 usec\nrounds: 1598"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1579.5780148295853,
            "unit": "iter/sec",
            "range": "stddev: 0.00022257768907617265",
            "extra": "mean: 633.0804750456634 usec\nrounds: 1082"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 29.351686849794877,
            "unit": "iter/sec",
            "range": "stddev: 0.0019743270786609737",
            "extra": "mean: 34.06959215384885 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10883623275585308,
            "unit": "iter/sec",
            "range": "stddev: 0.15485560970945447",
            "extra": "mean: 9.188116628799992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 418.2970318807629,
            "unit": "iter/sec",
            "range": "stddev: 0.0004621861302494374",
            "extra": "mean: 2.3906456985930844 msec\nrounds: 355"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 209.10456445890205,
            "unit": "iter/sec",
            "range": "stddev: 0.0007613998422244756",
            "extra": "mean: 4.782296372093506 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 4820529.694509645,
            "unit": "iter/sec",
            "range": "stddev: 2.529361710007457e-7",
            "extra": "mean: 207.44608235460544 nsec\nrounds: 53476"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 79.52927048948699,
            "unit": "iter/sec",
            "range": "stddev: 0.0015945171889437614",
            "extra": "mean: 12.573986833340692 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.1431152135928855,
            "unit": "iter/sec",
            "range": "stddev: 0.009592164933025886",
            "extra": "mean: 874.8024592000093 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.0946497724548196,
            "unit": "iter/sec",
            "range": "stddev: 0.01158901186458512",
            "extra": "mean: 913.5341961999757 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5679341613908899,
            "unit": "iter/sec",
            "range": "stddev: 0.012900505419458828",
            "extra": "mean: 1.7607674761999987 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 578.0930515112562,
            "unit": "iter/sec",
            "range": "stddev: 0.0003269151586817051",
            "extra": "mean: 1.7298253237706123 msec\nrounds: 488"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1560.9986265111552,
            "unit": "iter/sec",
            "range": "stddev: 0.00019899259123025263",
            "extra": "mean: 640.6155540540149 usec\nrounds: 1110"
          }
        ]
      }
    ]
  }
}