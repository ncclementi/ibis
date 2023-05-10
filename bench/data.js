window.BENCHMARK_DATA = {
  "lastUpdate": 1683732119415,
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
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "3a590b75bfc71822e8bf441eacf0cbbd84372f05",
          "message": "chore: add appropriate author and maintainer emails to pyproject.toml",
          "timestamp": "2023-05-10T08:12:06-07:00",
          "tree_id": "6f1765fe67cf510fd9c69bbb91f3bc938477ce67",
          "url": "https://github.com/ibis-project/ibis/commit/3a590b75bfc71822e8bf441eacf0cbbd84372f05"
        },
        "date": 1683732039192,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7899026028621139,
            "unit": "iter/sec",
            "range": "stddev: 0.0034060695776503783",
            "extra": "mean: 1.2659788641999967 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.28752571592905,
            "unit": "iter/sec",
            "range": "stddev: 0.0007853792969952501",
            "extra": "mean: 23.647635634149093 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 236.51565029691892,
            "unit": "iter/sec",
            "range": "stddev: 0.007484001250203735",
            "extra": "mean: 4.2280500201344475 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 289.4834827736085,
            "unit": "iter/sec",
            "range": "stddev: 0.00022813360485203168",
            "extra": "mean: 3.454428523585414 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 102.11863857497922,
            "unit": "iter/sec",
            "range": "stddev: 0.0007592288180570678",
            "extra": "mean: 9.792531647058373 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3135687760889128,
            "unit": "iter/sec",
            "range": "stddev: 0.050143113802175614",
            "extra": "mean: 761.284843400017 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 101.26810575956613,
            "unit": "iter/sec",
            "range": "stddev: 0.0007894408631799004",
            "extra": "mean: 9.874777379308654 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.9334302579242,
            "unit": "iter/sec",
            "range": "stddev: 0.00009769857951598002",
            "extra": "mean: 6.063052217104757 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 275.730368862646,
            "unit": "iter/sec",
            "range": "stddev: 0.00036853089280828655",
            "extra": "mean: 3.62673144827999 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9456895698358303,
            "unit": "iter/sec",
            "range": "stddev: 0.007573794108690477",
            "extra": "mean: 1.0574294482000028 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 178.0752128110724,
            "unit": "iter/sec",
            "range": "stddev: 0.00008934088490306755",
            "extra": "mean: 5.615604688682545 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9480718421575621,
            "unit": "iter/sec",
            "range": "stddev: 0.009856062953785128",
            "extra": "mean: 1.0547723869999799 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 286.08601681363126,
            "unit": "iter/sec",
            "range": "stddev: 0.00026662781770364245",
            "extra": "mean: 3.4954522109741664 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 84.919339557285,
            "unit": "iter/sec",
            "range": "stddev: 0.0005796496934179883",
            "extra": "mean: 11.775880561640717 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.514784986083248,
            "unit": "iter/sec",
            "range": "stddev: 0.00018096278478805226",
            "extra": "mean: 117.44277766666124 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1917341.7795798078,
            "unit": "iter/sec",
            "range": "stddev: 8.885278408762461e-8",
            "extra": "mean: 521.5554214956676 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 157.41667895802877,
            "unit": "iter/sec",
            "range": "stddev: 0.00019180867108395893",
            "extra": "mean: 6.352567000010367 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 192.2997109662647,
            "unit": "iter/sec",
            "range": "stddev: 0.010523189039691109",
            "extra": "mean: 5.2002158244295575 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 281.6509497464305,
            "unit": "iter/sec",
            "range": "stddev: 0.0002648601649312879",
            "extra": "mean: 3.550493974546498 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13990.218696310538,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018732859290637397",
            "extra": "mean: 71.47851093019133 usec\nrounds: 732"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4538.864838091668,
            "unit": "iter/sec",
            "range": "stddev: 0.00002411512295801596",
            "extra": "mean: 220.319404889008 usec\nrounds: 2045"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1976470.8879133798,
            "unit": "iter/sec",
            "range": "stddev: 7.476433319945659e-8",
            "extra": "mean: 505.9523042384552 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6376180700275087,
            "unit": "iter/sec",
            "range": "stddev: 0.002991742941454184",
            "extra": "mean: 610.6429931999969 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12417.125116589788,
            "unit": "iter/sec",
            "range": "stddev: 0.00001247678952538732",
            "extra": "mean: 80.53393926617998 usec\nrounds: 4034"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.99675777908162,
            "unit": "iter/sec",
            "range": "stddev: 0.0003474902942998842",
            "extra": "mean: 20.409513717394052 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.2817805599766,
            "unit": "iter/sec",
            "range": "stddev: 0.00007109934008098025",
            "extra": "mean: 8.906164428572083 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 82.53777704099754,
            "unit": "iter/sec",
            "range": "stddev: 0.016073560292792475",
            "extra": "mean: 12.115664315787033 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.069373977225407,
            "unit": "iter/sec",
            "range": "stddev: 0.000532282369914447",
            "extra": "mean: 39.889308799990886 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 695.7290095941518,
            "unit": "iter/sec",
            "range": "stddev: 0.000027831056426272998",
            "extra": "mean: 1.4373412438031619 msec\nrounds: 484"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 548.4600416866072,
            "unit": "iter/sec",
            "range": "stddev: 0.000023270665468828676",
            "extra": "mean: 1.823286883261051 msec\nrounds: 454"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.15288799122742,
            "unit": "iter/sec",
            "range": "stddev: 0.0003945014371081518",
            "extra": "mean: 17.49692859184112 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 89.12126218773953,
            "unit": "iter/sec",
            "range": "stddev: 0.014563656764699113",
            "extra": "mean: 11.220666936846532 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.945431363912206,
            "unit": "iter/sec",
            "range": "stddev: 0.0002707559665159936",
            "extra": "mean: 18.887370906975054 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 149082.99737160758,
            "unit": "iter/sec",
            "range": "stddev: 2.888716374348042e-7",
            "extra": "mean: 6.707673025297297 usec\nrounds: 39526"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5665438290044094,
            "unit": "iter/sec",
            "range": "stddev: 0.002654648428218472",
            "extra": "mean: 389.6290368000109 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 60.81614592776739,
            "unit": "iter/sec",
            "range": "stddev: 0.0008769589989861472",
            "extra": "mean: 16.443001849997547 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 103.8948480158399,
            "unit": "iter/sec",
            "range": "stddev: 0.0008188552530083102",
            "extra": "mean: 9.625116346938967 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 199.21006260979647,
            "unit": "iter/sec",
            "range": "stddev: 0.0001445238162109284",
            "extra": "mean: 5.019826744187888 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6111721.738788541,
            "unit": "iter/sec",
            "range": "stddev: 8.233755548924872e-9",
            "extra": "mean: 163.62001457823433 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2185.2350055338215,
            "unit": "iter/sec",
            "range": "stddev: 0.00013178823731767618",
            "extra": "mean: 457.6166853760035 usec\nrounds: 1265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 420.8728609884696,
            "unit": "iter/sec",
            "range": "stddev: 0.0000454296669724189",
            "extra": "mean: 2.3760144516122566 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 99.4349921448684,
            "unit": "iter/sec",
            "range": "stddev: 0.0009340680263335653",
            "extra": "mean: 10.056821833334931 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.76640712399329,
            "unit": "iter/sec",
            "range": "stddev: 0.0006209224406319941",
            "extra": "mean: 9.923942199998237 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2146.4258228483063,
            "unit": "iter/sec",
            "range": "stddev: 0.00008784090504359076",
            "extra": "mean: 465.89077961846374 usec\nrounds: 1629"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 161.3523807631565,
            "unit": "iter/sec",
            "range": "stddev: 0.00339517938874036",
            "extra": "mean: 6.197615400964333 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11368320.00660238,
            "unit": "iter/sec",
            "range": "stddev: 4.1631126618309916e-9",
            "extra": "mean: 87.9637448118936 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 283.8072312530679,
            "unit": "iter/sec",
            "range": "stddev: 0.00031519602503468327",
            "extra": "mean: 3.523518395161364 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1174.8796571250643,
            "unit": "iter/sec",
            "range": "stddev: 0.000014736183482499287",
            "extra": "mean: 851.1510042202998 usec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2185.81928973452,
            "unit": "iter/sec",
            "range": "stddev: 0.0000852937296051097",
            "extra": "mean: 457.4943613575006 usec\nrounds: 1237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 96.8913727243432,
            "unit": "iter/sec",
            "range": "stddev: 0.0008258631035985814",
            "extra": "mean: 10.320836333333915 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.78632741205611,
            "unit": "iter/sec",
            "range": "stddev: 0.00021354743375811858",
            "extra": "mean: 9.824502223680335 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2173.626292721435,
            "unit": "iter/sec",
            "range": "stddev: 0.00008632554989162321",
            "extra": "mean: 460.0606844647497 usec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7050995.296441579,
            "unit": "iter/sec",
            "range": "stddev: 4.800467921028497e-9",
            "extra": "mean: 141.8239493798525 nsec\nrounds: 60607"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 96.20392506810694,
            "unit": "iter/sec",
            "range": "stddev: 0.0007860890975466644",
            "extra": "mean: 10.394586284208847 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.004240815343266,
            "unit": "iter/sec",
            "range": "stddev: 0.0002114796552122154",
            "extra": "mean: 52.61983415789174 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 83.80487353614309,
            "unit": "iter/sec",
            "range": "stddev: 0.02334633165435955",
            "extra": "mean: 11.93248027000152 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.55541993263199,
            "unit": "iter/sec",
            "range": "stddev: 0.0009216862647929267",
            "extra": "mean: 10.044656540816046 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 94.52905720241293,
            "unit": "iter/sec",
            "range": "stddev: 0.0009569969069044817",
            "extra": "mean: 10.57875778723491 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 316.4188282963963,
            "unit": "iter/sec",
            "range": "stddev: 0.00006655602382713439",
            "extra": "mean: 3.1603681910587142 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 100.14069359898545,
            "unit": "iter/sec",
            "range": "stddev: 0.0007850801887616988",
            "extra": "mean: 9.985950406979518 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10454.852755617854,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024397063190498456",
            "extra": "mean: 95.64936239419114 usec\nrounds: 5999"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 109.2906000979333,
            "unit": "iter/sec",
            "range": "stddev: 0.00004693526259214069",
            "extra": "mean: 9.149917734040425 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 25.145875266713457,
            "unit": "iter/sec",
            "range": "stddev: 0.036408389112100197",
            "extra": "mean: 39.76795356667253 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8333.762244586915,
            "unit": "iter/sec",
            "range": "stddev: 0.000013135304547373494",
            "extra": "mean: 119.99382399582336 usec\nrounds: 3784"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17300676272816415,
            "unit": "iter/sec",
            "range": "stddev: 0.09975818053219554",
            "extra": "mean: 5.780120870599978 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1807.4257482613427,
            "unit": "iter/sec",
            "range": "stddev: 0.000006276107675726466",
            "extra": "mean: 553.2730741287447 usec\nrounds: 1349"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2169.4296993838434,
            "unit": "iter/sec",
            "range": "stddev: 0.00007978763204491841",
            "extra": "mean: 460.9506361436915 usec\nrounds: 1245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2200.0885373142773,
            "unit": "iter/sec",
            "range": "stddev: 0.00008482102464175547",
            "extra": "mean: 454.5271624480776 usec\nrounds: 1699"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1659280.7850039967,
            "unit": "iter/sec",
            "range": "stddev: 1.3469454381545375e-7",
            "extra": "mean: 602.6707529175608 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 105.85350167972683,
            "unit": "iter/sec",
            "range": "stddev: 0.00007061051754493047",
            "extra": "mean: 9.44701860714657 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2236.362792394794,
            "unit": "iter/sec",
            "range": "stddev: 0.00008508072422259925",
            "extra": "mean: 447.1546402939197 usec\nrounds: 1226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 276.11230744900166,
            "unit": "iter/sec",
            "range": "stddev: 0.0003335109578812193",
            "extra": "mean: 3.6217146900802364 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.28071719941706,
            "unit": "iter/sec",
            "range": "stddev: 0.0008758909547386161",
            "extra": "mean: 27.56285093548447 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 80.01874105596457,
            "unit": "iter/sec",
            "range": "stddev: 0.019431679916019264",
            "extra": "mean: 12.497072395835454 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 98.69345590406931,
            "unit": "iter/sec",
            "range": "stddev: 0.000315738697326854",
            "extra": "mean: 10.132384065788582 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4484571.839829298,
            "unit": "iter/sec",
            "range": "stddev: 1.2850397491342526e-8",
            "extra": "mean: 222.98672776709088 nsec\nrounds: 151493"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6164900.087786742,
            "unit": "iter/sec",
            "range": "stddev: 4.655511175192487e-9",
            "extra": "mean: 162.20863043357923 nsec\nrounds: 59172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.78424387089477,
            "unit": "iter/sec",
            "range": "stddev: 0.0008055711058217835",
            "extra": "mean: 9.3646774444461 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 249.72972973545038,
            "unit": "iter/sec",
            "range": "stddev: 0.003812007682267976",
            "extra": "mean: 4.004329004237276 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 188.32810942011363,
            "unit": "iter/sec",
            "range": "stddev: 0.00005274077626030042",
            "extra": "mean: 5.309881796610862 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 103.16212048126508,
            "unit": "iter/sec",
            "range": "stddev: 0.0008132458657353225",
            "extra": "mean: 9.693480468750218 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2139.830981314529,
            "unit": "iter/sec",
            "range": "stddev: 0.00008563580897045703",
            "extra": "mean: 467.32662940775145 usec\nrounds: 1333"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.16613158164172,
            "unit": "iter/sec",
            "range": "stddev: 0.0008199743085065851",
            "extra": "mean: 9.884731029702303 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 99.35549982189508,
            "unit": "iter/sec",
            "range": "stddev: 0.0009318241539667233",
            "extra": "mean: 10.064868092784018 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2132.0773754674224,
            "unit": "iter/sec",
            "range": "stddev: 0.00009316418188936534",
            "extra": "mean: 469.0261298705291 usec\nrounds: 1617"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 250.46597830539022,
            "unit": "iter/sec",
            "range": "stddev: 0.00043000298581391164",
            "extra": "mean: 3.9925582179497114 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5606808.794512569,
            "unit": "iter/sec",
            "range": "stddev: 9.731171097461291e-9",
            "extra": "mean: 178.35457506208036 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.0938179818555,
            "unit": "iter/sec",
            "range": "stddev: 0.029725160897052984",
            "extra": "mean: 27.705575522730896 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1980567.4033330593,
            "unit": "iter/sec",
            "range": "stddev: 8.212813504931084e-8",
            "extra": "mean: 504.90581553403285 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 127.9306987812441,
            "unit": "iter/sec",
            "range": "stddev: 0.0002934903935881036",
            "extra": "mean: 7.816732102041873 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1011519.6336309541,
            "unit": "iter/sec",
            "range": "stddev: 1.011936384253898e-7",
            "extra": "mean: 988.6115570593494 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 753.2958721333015,
            "unit": "iter/sec",
            "range": "stddev: 0.00005742724336660255",
            "extra": "mean: 1.3274996412339855 msec\nrounds: 616"
          }
        ]
      }
    ]
  }
}